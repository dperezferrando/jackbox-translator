import Promise from "bluebird";
import _ from "lodash";
import highland from "highland";

const fs = Promise.promisifyAll(require("fs"));
const PATH = "I:\Juegos\\Steam\\steamapps\\common\\The Jackbox Party Pack 6\\games\\PushTheButton\\content"
const FOLDERS = ["PushTheButtonDrawingTests", "PushTheButtonMoralityTests", "PushTheButtonRatingTests", "PushTheButtonWritingTests"]
const LOCALIZATION = {}

const readAndProcessDataFile = (path, dir) => {
  const fullPath = `${path}\\${dir}\\data.jet`;
  return highland(fs.readFileAsync(fullPath))
    .map(it => JSON.parse(it.toString()).fields)
    .sequence()
    .filter(({ n }) => /Text/gi.test(n))
    .tap(({v}) => _.assign(LOCALIZATION, { [`TRANSLATION_${dir}`]: v }))
}

const processFolder = (folderName) => {
  const fullPath = `${PATH}\\${folderName}`;
  return highland(fs.readdirAsync(fullPath))
    .sequence()
    .flatMap(dir => readAndProcessDataFile(fullPath, dir))
    .reduce(undefined, _.noop)
    .toPromise(Promise)
    .then(() => fs.writeFileAsync("./localization.json", JSON.stringify(LOCALIZATION)))
}

Promise.map(_.take(FOLDERS, 1), processFolder,{concurrency: 2})