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
    return this.processFolder(this.fullGamePath());
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
    const fields = file[fieldsProperty];
    const newFields = fields.map(it => this.processField(it));
    const newFile = { ...file,  [fieldsProperty]: newFields };
    return fs.writeFileAsync(fullPath, JSON.stringify(newFile));
  }

  processField(field){
    if(!this.game.shouldProcessField(field))
      return field;
    const properties = this.game.propertyToModify(field);
    return this.processProperties(field, properties);
  }

  processProperties(field, properties) {
    const newFields = properties.map( property => this._modificator_(field, property))
    return { ...field, ...(_.reduce(newFields, _.merge, {})) };
  }

  fullGamePath() {
    return `${this.steamPath}\\${this.game.path}`
  }

  _modificator_(field) {
    throw new Error("Not implemented - This is an abstract class")
  }


}

export default JackboxProcessor