import _ from "lodash";

class Game {
  constructor(settings) {
    _.assign(this, { ...settings })
  }

  isDataFile(fileName) {
    return _.includes(this.dataFiles, fileName);
  }

  isPrompt(property) {
    return _.some(this.promptsRegExp, it => new RegExp(it, "gi").test(property))
  }

  fieldsProperty(file) {
    return _.has(file, "fields")? "fields" : this.arrayName;
  }

  shouldProcessField(field) {
    return this.isPrompt(field[this.promptIdProperty]) || _.has(field, "id");
  }

  propertyToModify(field) {
    // ALL OF THEM HAVE "v" BUT SOME HAVE "s".
    // WHEN "s" IS PRESENT WE DONT CARE ABOUT "v"
    // SO GETTING THE FIRST ONE SHOULD BE ENOUGH
    return this.textProperties;//_.find(this.textProperties, (property) => _.has(field, property))
  }


}

export default Game;