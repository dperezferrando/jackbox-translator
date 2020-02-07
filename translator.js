import Promise from "bluebird";
import _ from "lodash";
import highland from "highland";

const fs = Promise.promisifyAll(require("fs"));
const PATH = "I:\Juegos\\Steam\\steamapps\\common\\The Jackbox Party Pack 6\\games\\PushTheButton\\content"
const FOLDERS = ["PushTheButtonDrawingTests", "PushTheButtonMoralityTests", "PushTheButtonRatingTests", "PushTheButtonWritingTests"]


const readDataFile = (dir) => {
  const fullPath = `${dir}\\data.jet`;
  return highland(fs.readFileAsync(fullPath));
}

const processFolder = (folderName) => {
  const fullPath = `${PATH}\\${folderName}`;
  return highland(fs.readdirAsync(fullPath))
    .sequence()
    .flatMap(dir => readDataFile(`${fullPath}\\${dir}`))
    .tap((it) => console.log(it.toString()))
    .reduce(undefined, _.noop)
    .toPromise(Promise)
}

Promise.map(_.take(FOLDERS, 1), processFolder,{concurrency: 2})