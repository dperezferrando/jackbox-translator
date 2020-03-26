import hash from "string-hash";
import _ from "lodash";
import JackboxProcessor from "./jackboxProcessor";

class JackboxTranslator extends JackboxProcessor {

  constructor(steamPath, game, localization) {
    super(steamPath, game);
    this.localization = localization
  }


  _modificator_ (field, properties) {
    const newFields = properties.map(property => {
      return { [property]: this.localization[field[property]] }
    })

    return { ...field, ...(_.reduce(newFields, _.merge, {})) };
  }

}

export default JackboxTranslator;
