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

  processFolder(folder) {
    return super.processFolder(folder)
    .then(() => this.shuffle()) 
    .then(localization => fs.writeFileAsync("./localization.json", JSON.stringify(localization)));

  }

  _modificator_(field) {
    if(!this.isPrompt(field.n))
      return field;
    // ALL OF THEM HAVE "v" BUT SOME HAVE "s".
    // WHEN "s" IS PRESENT WE DONT CARE ABOUT "v"
    // SO GETTING THE FIRST ONE SHOULD BE ENOUGH
    const property = _.find(this.game.textProperties, (property) => _.has(field, property));
    const id = `TRANSLATION_${hash(field[property])}`;

    // HAVING EFFECT INSIDE MAP => NOT COOL
     _.assign(this.localization, { [id]: field[property] })
    return { ...field, [property]: id}
  }

  shuffle() {
    return _(this.localization)
      .map((value, key) => ({ [key]: value }))
      .shuffle()
      .reduce((one, another) => ({ ...one, ...another }), {})
    }

}

export default JackboxLocalizator