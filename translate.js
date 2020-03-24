import Promise from "bluebird";
import _ from "lodash";
import * as localize from "./localization"
import { isPrompt, processFolder, TEXT_PROPERTIES } from "./common";

const FOLDERS = ["PushTheButtonDrawingTests", "PushTheButtonMoralityTests", "PushTheButtonRatingTests", "PushTheButtonWritingTests"]


const localizeIfPrompt = (field) => {
  if(!isPrompt(field.n))
    return field;
  const property = _.find(TEXT_PROPERTIES, (property) => _.has(field, property));
  return { ...field, [property]: localize[field[property]] };

}

Promise.map(FOLDERS, (folder) => processFolder(folder, localizeIfPrompt),{concurrency: 4})