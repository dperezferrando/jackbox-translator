import Promise from "bluebird";
import _ from "lodash";
import highland from "highland";

const fs = Promise.promisifyAll(require("fs"));


const PATH = "I:\Juegos\\Steam\\steamapps\\common\\The Jackbox Party Pack 6\\games\\PushTheButton\\content"
const VALID_FIELDS = [/Text/gi, /HumanPromptAudio/gi];

export const TEXT_PROPERTIES = ["s", "v"] // ORDER IS IMPORTANT
export const isPrompt = (property) => _.some(VALID_FIELDS, it => it.test(property)) 

export const modifyFile = (file, fullPath, modificator) => {
  const { fields } = file;
  const newFields = fields.map(it => modificator(it));
  return fs.writeFileAsync(fullPath, JSON.stringify({ ...file,  fields: newFields }));
}

export const readAndProcessDataFile = (path, dir, modificator) => {
  const fullPath = `${path}\\${dir}\\data.jet`;
  return highland(fs.readFileAsync(fullPath))
    .map(it => JSON.parse(it.toString()))
    .tap(it => modifyFile(it, fullPath, modificator));
}


export const processFolder = (folderName, modificator) => {
  const fullPath = `${PATH}\\${folderName}`;
  return highland(fs.readdirAsync(fullPath))
    .sequence()
    .flatMap(dir => readAndProcessDataFile(fullPath, dir, modificator))
    .reduce(undefined, _.noop)
    .toPromise(Promise)
}