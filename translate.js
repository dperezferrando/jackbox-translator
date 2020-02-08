import Promise from "bluebird";
import _ from "lodash";
import highland from "highland";
import * as localize from "./localization"

const fs = Promise.promisifyAll(require("fs"));

const PATH = "I:\Juegos\\Steam\\steamapps\\common\\The Jackbox Party Pack 6\\games\\PushTheButton\\content"

const FOLDERS = ["PushTheButtonDrawingTests", "PushTheButtonMoralityTests", "PushTheButtonRatingTests", "PushTheButtonWritingTests"]


const isPrompt = (property) => /Text/gi.test(property) || /HumanPromptAudio/gi.test(property) 

const localizeIfPrompt = (field, dir) => {
  if(!isPrompt(field.n))
    return field;
  if(field.s)
    return { ...field, s: localize[field.s]}
  return { ...field, v: localize[field.v]}
}

const modifyFile = (file, fullPath, dir) => {
  const { fields } = file;
  const newFields = fields.map(it => localizeIfPrompt(it, dir));
  return fs.writeFileAsync(fullPath, JSON.stringify({ ...file,  fields: newFields }));

}

const readAndProcessDataFile = (path, dir) => {
  const fullPath = `${path}\\${dir}\\data.jet`;
  return highland(fs.readFileAsync(fullPath))
    .map(it => JSON.parse(it.toString()))
    .tap(it => modifyFile(it, fullPath, dir))
}

const processFolder = (folderName) => {
  const fullPath = `${PATH}\\${folderName}`;
  return highland(fs.readdirAsync(fullPath))
    .sequence()
    .flatMap(dir => readAndProcessDataFile(fullPath, dir))
    .reduce(undefined, _.noop)
    .toPromise(Promise)
}

Promise.map(_.take(FOLDERS, 2), processFolder,{concurrency: 2})