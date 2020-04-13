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

  _modificator_(field, property) {
    const value = field[property];
    // HAVING EFFECT INSIDE MAP => NOT COOL
    if(!_.isArray(value)) {
      const id = `TRANSLATION_${hash(value)}`;
      _.assign(this.localization, { [id]:  value })
      return { [property]: id  };
    } else {
      const values = value.map(it => {
        const id = `TRANSLATION_${hash(it)}`;
        _.assign(this.localization, { [id]:  it })
      })
      return { [property]: values }
    }
  }

  shuffle() {
    return _(this.localization)
      .map((value, key) => ({ [key]: value }))
      .shuffle()
      .reduce((one, another) => ({ ...one, ...another }), {})
    }

}

export default JackboxLocalizator