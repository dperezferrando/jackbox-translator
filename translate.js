import JackboxTranslator from "./domain/jackboxTranslator";
import pushTheButton from "./domain/games/pushTheButton"
import * as localization from "./localization"

new JackboxTranslator("I:\Juegos\\Steam\\steamapps\\common", pushTheButton, localization)
  .run()

