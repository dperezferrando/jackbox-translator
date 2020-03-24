import Promise from "bluebird";
import _ from "lodash";
import highland from "highland";
import hash from "string-hash";

const fs = Promise.promisifyAll(require("fs"));
const PATH = "I:\Juegos\\Steam\\steamapps\\common\\The Jackbox Party Pack 6\\games\\PushTheButton\\content"
const TEXT_PROPERTIES = ["s", "v"]
const LOCALIZATION = {}

const shuffle = () => {
  return _(LOCALIZATION)
    .map((value, key) => ({ [key]: value }))
    .shuffle()
    .shuffle()
    .reduce((one, another) => ({ ...one, ...another }), {})
}


const isPrompt = (property) => /Text/gi.test(property) || /HumanPromptAudio/gi.test(property) 

export const replaceWithIdIfPrompt = (field) => {

  if(!isPrompt(field.n))
    return field;
  // ALL OF THEM HAVE "v" BUT SOME HAVE "s".
  // WHEN "s" IS PRESENT WE DONT CARE ABOUT "v"
  // SO GETTING THE FIRST ONE SHOULD BE ENOUGH
  const property = _.find(TEXT_PROPERTIES, (property) => _.has(field, property));
  return { ...field, [property]: `TRANSLATION_${hash(field[property])}`}
}

const modifyFile = (file, fullPath, dir) => {
  const { fields } = file;
  const newFields = fields.map(it => replaceWithIdIfPrompt(it));
  return fs.writeFileAsync(fullPath, JSON.stringify({ ...file,  fields: newFields }));

}

const readAndProcessDataFile = (path, dir) => {
  const fullPath = `${path}\\${dir}\\data.jet`;
  return highland(fs.readFileAsync(fullPath))
    .map(it => JSON.parse(it.toString()))
    .tap(it => modifyFile(it, fullPath, dir))
    .map(it => it.fields)
    .sequence()
    .filter(({ n }) => isPrompt(n))
    .tap(({ v, n, s }) =>  _.assign(LOCALIZATION, { [`TRANSLATION_${hash(s ? s: v)}`]: s ? s: v }))
}

export const processFolder = (folderName) => {
  const fullPath = `${PATH}\\${folderName}`;
  return highland(fs.readdirAsync(fullPath))
    .sequence()
    .flatMap(dir => readAndProcessDataFile(fullPath, dir))
    .reduce(undefined, _.noop)
    .toPromise(Promise)
    .then(() => shuffle(LOCALIZATION)) 
    .then(localization => fs.writeFileAsync("./localization.json", JSON.stringify(localization)))
}
