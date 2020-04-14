import Promise from "bluebird";
import JackboxLocalizator from "./domain/jackboxLocalizator";
import quiplash2 from "./domain/games/quiplash2"
import pushTheButton from "./domain/games/pushTheButton"
import patentlyStupid from "./domain/games/patentlyStupid"
import quiplash from "./domain/games/quiplash"
import jokeBoat from "./domain/games/jokeBoat"
import Game from "./domain/games/game"


new JackboxLocalizator("I:\Juegos\\Steam\\steamapps\\common", new Game(jokeBoat))
  .run()

