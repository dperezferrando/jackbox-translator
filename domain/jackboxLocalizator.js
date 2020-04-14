import hash from "string-hash";
import _ from "lodash";
import JackboxProcessor from "./jackboxProcessor";
import Promise from "bluebird";
const fs = Promise.promisifyAll(require("fs"));

class JackboxLocalizator extends JackboxProcessor {

  constructor(steamPath, game) {
    super(steamPath, game);
    this.localization = {}
  }

  run() {
    return super.run()
    .then(() => this.shuffle()) 
    .then(localization => fs.writeFileAsync("./localization.json", JSON.stringify(localization)));

  }

  shuffle() {
    return _(this.localization)
      .map((value, key) => ({ [key]: value }))
      .shuffle()
      .reduce((one, another) => ({ ...one, ...another }), {})
  }

  _modificator_(field, property) {
    const value = field[property];
    // HAVING EFFECT INSIDE MAP => NOT COOL
    return { [property]: this._localizeValue(value) };
  }

  _localizeValue(value) {
    return _.isArray(value) ? value.map(it => this._hashAndSave(it)) : this._hashAndSave(value);
  }

  _hashAndSave(value) {
    const id = `TRANSLATION_${hash(value)}`;
    _.assign(this.localization, { [id]:  value })
    return id;
  }

}

export default JackboxLocalizator