import JackboxTranslator from "./domain/jackboxTranslator";
import quiplash2 from "./domain/games/quiplash2"
import pushTheButton from "./domain/games/pushTheButton"
import patentlyStupid from "./domain/games/patentlyStupid"
import quiplash from "./domain/games/quiplash"
import jokeBoat from "./domain/games/jokeBoat"
import murderParty2 from "./domain/games/murderParty2"
import Game from "./domain/games/game"
import * as localization from "./localization"

new JackboxTranslator("I:\Juegos\\Steam\\steamapps\\common", new Game(murderParty2), localization)
  .run()

