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

    return Promise.map(this.game.folders, (folder) => this.processFolder(folder), { concurrency: 4 });
  }

  processFolder(folderName) {
    const fullPath = `${this.fullGamePath()}\\${folderName}`;
    return highland(fs.readdirAsync(fullPath))
      .sequence()
      .flatMap(dir => this.readAndProcessDataFile(fullPath, dir))
      .reduce(undefined, _.noop)
      .toPromise(Promise)
  }

  readAndProcessDataFile(path, dir) {
    const fullPath = `${path}\\${dir}\\data.jet`;
    return highland(fs.readFileAsync(fullPath))
      .map(it => JSON.parse(it.toString()))
      .tap(it => this.modifyFile(it, fullPath));
  }

  modifyFile(file, fullPath) {
    const { fields } = file;
    const newFields = fields.map(it => this._modificator_(it));
    return fs.writeFileAsync(fullPath, JSON.stringify({ ...file,  fields: newFields }));
  }

  fullGamePath() {
    return `${this.steamPath}\\${this.game.path}`
  }

  // NO OLVIDAR GENERALIZAR
  isPrompt(property) {
    return /Text/gi.test(property) || /HumanPromptAudio/gi.test(property);
  }

}

export default JackboxProcessor