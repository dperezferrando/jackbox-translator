import JackboxTranslator from "./domain/jackboxTranslator";
import pushTheButton from "./domain/games/pushTheButton"

new JackboxTranslator("I:\Juegos\\Steam\\steamapps\\common", pushTheButton)
  .run()

