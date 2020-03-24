import hash from "string-hash";
import _ from "lodash";
import JackboxProcessor from "./jackboxProcessor";
import * as localize from "../localization"

class JackboxTranslator extends JackboxProcessor {

  _modificator_ (field) {
    if(!this.isPrompt(field.n))
      return field;
    const property = _.find(this.game.textProperties, (property) => _.has(field, property));
    return { ...field, [property]: localize[field[property]] };
}

}

export default JackboxTranslator;
