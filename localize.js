import Promise from "bluebird";
import _ from "lodash";
import highland from "highland";
import hash from "string-hash";
import { isPrompt, modifyFile, processFolder, TEXT_PROPERTIES } from "./common";

const fs = Promise.promisifyAll(require("fs"));

const LOCALIZATION = {}

const shuffle = () => {
  return _(LOCALIZATION)
    .map((value, key) => ({ [key]: value }))
    .shuffle()
    .shuffle()
    .reduce((one, another) => ({ ...one, ...another }), {})
}



export const replaceWithIdIfPrompt = (field) => {

  if(!isPrompt(field.n))
    return field;
  // ALL OF THEM HAVE "v" BUT SOME HAVE "s".
  // WHEN "s" IS PRESENT WE DONT CARE ABOUT "v"
  // SO GETTING THE FIRST ONE SHOULD BE ENOUGH
  const property = _.find(TEXT_PROPERTIES, (property) => _.has(field, property));
  const id = `TRANSLATION_${hash(field[property])}`;

  // HAVING EFFECT INSIDE MAP => NOT COOL
   _.assign(LOCALIZATION, { [id]: field[property] })
  return { ...field, [property]: id}
}


export const execute = (folder) => {
    processFolder(folder, replaceWithIdIfPrompt)
    .then(() => shuffle(LOCALIZATION)) 
    .then(localization => fs.writeFileAsync("./localization.json", JSON.stringify(localization)))
}
