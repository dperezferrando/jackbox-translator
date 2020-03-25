import Promise from "bluebird";
import JackboxLocalizator from "./domain/jackboxLocalizator";
import quiplash2 from "./domain/games/quiplash2"

new JackboxLocalizator("I:\Juegos\\Steam\\steamapps\\common", quiplash2)
  .run()

