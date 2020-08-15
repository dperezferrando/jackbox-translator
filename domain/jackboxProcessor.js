import Promise from "bluebird";
import highland from "highland";
import _ from "lodash";
import progressBar from "../utils/progressBar";

const fs = Promise.promisifyAll(require("fs"));

class JackboxProcessor {

  constructor(steamPath, game) {
    this.steamPath = steamPath;
    this.game = game;
  }

  run() {
    progressBar.start(this.game.dataFilesLength()-1, 0);
    return this.processFolder(this.fullGamePath())
  }

  processFolder(path) {
    return highland(fs.readdirAsync(path))
      .sequence()
      .filter(it => !isNaN(it) || this.game.isDataFile(it))
      .flatMap(dir => this.readAndProcessDataFile(path, dir))
      .reduce(undefined, _.noop)
      .toPromise(Promise)
  }

  readAndProcessDataFile(path, dir) {
    const fullPath = `${path}\\${dir}`;
    return highland(fs.lstatAsync(fullPath))
      .flatMap(it => highland(this.processFileOrFolder(it, fullPath)))
      .tap(() => this.game.toReName(dir) && progressBar.increment());

  }

  processFileOrFolder(it, fullPath) {
    return it.isFile() ? this.processFile(fullPath) : this.processFolder(fullPath);

  }

  processFile(fullPath) {
    return highland(fs.readFileAsync(fullPath))
      .map(it => JSON.parse(it.toString()))
      .tap(it => this.modifyFile(it, fullPath));
  }

  modifyFile(file, fullPath) {
    const fieldsProperty = this.game.fieldsProperty(file);
    const fields = file[fieldsProperty] || _.castArray(file);
    const newFields = fields.map(it => this.processField(it));
    const newFile = file[fieldsProperty] ? { ...file,  [fieldsProperty]: newFields } : _.first(newFields);
    return fs.writeFileAsync(fullPath, JSON.stringify(newFile));
  }

  processField(field){
    if(!this.game.shouldProcessField(field))
      return field;
    return this.processProperties(field);
  }

  processProperties(field) {
    const newFields = this.game.propertiesToModify(field)
      .map(property => this.modificator(field, property))
    return { ...field, ...(_.reduce(newFields, _.merge, {})) };
  }

  modificator (field, property) {
    const value = field[property];
    return { [property]: this._getNewValue(value) };
  }

  fullGamePath() {
    return `${this.steamPath}\\${this.game.path}`
  }

  _getNewValue(value){
    return _.isArray(value) ? value.map(it => this._getNewValue(it)) : this._processFieldOrFinalValue(value);
  }

  _processFieldOrFinalValue(value) {
    return _.isPlainObject(value) ? this.processProperties(value) : this._modifcateValue_(value)
  }

  _modifcateValue_(field) {
    throw new Error("Not implemented - This is an abstract class")
  }



}

export default JackboxProcessor