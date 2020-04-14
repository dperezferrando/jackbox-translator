import hash from "string-hash";
import _ from "lodash";
import JackboxProcessor from "./jackboxProcessor";

class JackboxTranslator extends JackboxProcessor {

  constructor(steamPath, game, localization) {
    super(steamPath, game);
    this.localization = localization
  }


  _modificator_ (field, property) {
    const value = field[property];
    if(!_.isArray(value))
      return { [property]: this.localization[value] };
    return { [property]: value.map(it => this.localization[it])}
  }

}

export default JackboxTranslator;
