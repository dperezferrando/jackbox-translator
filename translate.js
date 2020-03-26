import JackboxTranslator from "./domain/jackboxTranslator";
import quiplash2 from "./domain/games/quiplash2"
import pushTheButton from "./domain/games/pushTheButton"
import patentlyStupid from "./domain/games/patentlyStupid"
import splitTheRoom from "./domain/games/splitTheRoom"
import Game from "./domain/games/game"
import * as localization from "./localization"

new JackboxTranslator("I:\Juegos\\Steam\\steamapps\\common", new Game(splitTheRoom), localization)
  .run()

