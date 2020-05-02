import Promise from "bluebird";
import JackboxLocalizator from "./jackboxLocalizator";
import JackboxTranslator from "./jackboxTranslator";
import Game from "./games/game";
import gamesMapper from "./games/gamesMapper";

const fs = Promise.promisifyAll(require("fs"));

class JackboxProcessorFactory {
  
  localizator(steamPath, gameName, output) {
    return Promise.resolve(new JackboxLocalizator(steamPath, this._getGame(gameName), output));
  }

  translator(steamPath, gameName, localizationPath) {
    return fs.readFileAsync(localizationPath)
    .then(JSON.parse)
    .then(localization => new JackboxTranslator(steamPath, this._getGame(gameName), localization));
  }

  _getGame(gameName) {
    return new Game(gamesMapper[gameName]);
  }

}

export default new JackboxProcessorFactory()