import Promise from "bluebird";
import JackboxLocalizator from "./domain/jackboxLocalizator";
import pushTheButton from "./domain/games/pushTheButton"

new JackboxLocalizator("I:\Juegos\\Steam\\steamapps\\common", pushTheButton)
  .run()

