import Promise from "bluebird";
import JackboxLocalizator from "./domain/jackboxLocalizator";
import quiplash2 from "./domain/games/quiplash2"
import pushTheButton from "./domain/games/pushTheButton"
import patentlyStupid from "./domain/games/patentlyStupid"


new JackboxLocalizator("I:\Juegos\\Steam\\steamapps\\common", patentlyStupid)
  .run()

