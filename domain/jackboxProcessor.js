import Promise from "bluebird";
import highland from "highland";
import _ from "lodash";

const fs = Promise.promisifyAll(require("fs"));

class JackboxProcessor {

  constructor(steamPath, game) {
    this.steamPath = steamPath;
    this.game = game;
  }

  run() {
    return this.processFolder(this.fullGamePath())//Promise.map(this.game.folders, (folder) => this.processFolder(folder), { concurrency: 4 });
  }

  processFolder(path) {
    return highland(fs.readdirAsync(path))
      .sequence()
      .filter(it => !isNaN(it) || _.includes(this.game.dataFiles, it))
      .flatMap(dir => this.readAndProcessDataFile(path, dir))
      .reduce(undefined, _.noop)
      .toPromise(Promise)
  }

  readAndProcessDataFile(path, dir) {
    const fullPath = `${path}\\${dir}`;
    return highland(fs.lstatAsync(fullPath))
      .flatMap(it => highland(this.processFileOrFolder(it, fullPath)))

  }

  processFileOrFolder(it, fullPath) {
    return it.isFile() ? this.processFile(fullPath) : this.processFolder(fullPath);;

  }

  processFile(fullPath) {
    return highland(fs.readFileAsync(fullPath))
      .map(it => JSON.parse(it.toString()))
      .tap(it => this.modifyFile(it, fullPath));
  }

  modifyFile(file, fullPath) {
    const fieldsProperty = _.has(file, "fields")? "fields" :this.game.arrayName;
    const fields = file[fieldsProperty];
    const newFields = fields.map(it => this.processField(it));
    return fs.writeFileAsync(fullPath, JSON.stringify({ ...file,  [fieldsProperty]: newFields }));
  }

  processField(field){
    if(!this.isPrompt(field[this.game.promptIdProperty]) && !_.has(field, "id"))
      return field;
      // ALL OF THEM HAVE "v" BUT SOME HAVE "s".
      // WHEN "s" IS PRESENT WE DONT CARE ABOUT "v"
      // SO GETTING THE FIRST ONE SHOULD BE ENOUGH
    const property = _.find(this.game.textProperties, (property) => _.has(field, property));
    return this._modificator_(field, property);
  }

  fullGamePath() {
    return `${this.steamPath}\\${this.game.path}`
  }

  isPrompt(property) {
    return _.some(this.game.promptsRegExp, it => new RegExp(it, "gi").test(property))
  }

  _modificator_(field) {
    throw new Error("Not implemented - This is an abstract class")
  }

}

export default JackboxProcessor