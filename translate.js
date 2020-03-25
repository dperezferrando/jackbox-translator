import JackboxTranslator from "./domain/jackboxTranslator";
import quiplash2 from "./domain/games/quiplash2"
import pushTheButton from "./domain/games/pushTheButton"
import patentlyStupid from "./domain/games/patentlyStupid"
import * as localization from "./localization"

new JackboxTranslator("I:\Juegos\\Steam\\steamapps\\common", quiplash2, patentlyStupid)
  .run()

