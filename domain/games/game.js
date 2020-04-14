import _ from "lodash";

class Game {
  constructor(settings) {
    _.assign(this, { ...settings })
  }

  isDataFile(fileName) {
    return _.includes(this.dataFiles, fileName);
  }

  isPrompt(property) {
    return _.some(this.promptsRegExp, it => new RegExp(it, "g").test(property))
  }

  fieldsProperty(file) {
    return _.has(file, "fields")? "fields" : this.arrayName;
  }

  shouldProcessField(field) {
    return this.isPrompt(field[this.promptIdProperty]) || _.has(field, "id");
  }

  propertiesToModify(field) {
    return this.textProperties
      .filter(property => _.has(field, property))
  }


}

export default Game;