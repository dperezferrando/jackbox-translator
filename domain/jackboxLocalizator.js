import hash from "string-hash";
import _ from "lodash";
import JackboxProcessor from "./jackboxProcessor";
import Promise from "bluebird";
const fs = Promise.promisifyAll(require("fs"));

class JackboxLocalizator extends JackboxProcessor {

  constructor(steamPath, game, output) {
    super(steamPath, game);
    this.output = output;
    this.localization = {}
  }

  run() {
    return super.run()
    .then(() => this.shuffle()) 
    .then(localization => fs.writeFileAsync(this.output, JSON.stringify(localization)));

  }

  shuffle() {
    return _(this.localization)
      .map((value, key) => ({ [key]: value }))
      .shuffle()
      .reduce((one, another) => ({ ...one, ...another }), {})
  }

  _modifcateValue_(value) {
    // HAVING EFFECT INSIDE MAP => NOT COOL
    const id = `TRANSLATION_${hash(value)}`;
    _.assign(this.localization, { [id]:  value })
    return id;
  }

}

export default JackboxLocalizator