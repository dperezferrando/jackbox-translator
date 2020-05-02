import _ from "lodash";
import jackboxProcessorFactory from "./domain/JackboxProcessorFactory";
import commandLineArgs from 'command-line-args';

const mainDefinitions  = [
  { name: 'command', defaultOption: true }
]

const STEAM_PATH = {
  name: "steampath",
  type: String,
  alias: "p"
};

const FILE = {
  name: "file",
  type: String,
  alias: "f"
};

const GAME = {
  name: "game",
  type: String,
  alias: "g"
};

const commandOptions = {
  translate: [STEAM_PATH, FILE, GAME],
  localize: [STEAM_PATH, FILE, GAME],
  config: [STEAM_PATH]
};

const { command, _unknown } = commandLineArgs(mainDefinitions , { stopAtFirstUnknown: true })
const argv = _unknown || []


const options = commandLineArgs(commandOptions[command], { argv })

const VALID_GAMES = [
  "quiplash2",
  "pushTheButton",
  "patentlyStupid",
  "quiplash",
  "jokeBoat",
  "murderParty2",
  "roleModels",
  "guesspionage"
];

const JACKBOX_PROCESSORS = {
  translate: "translator",
  localize: "localizator"
};


const processGame = (options) => {
  const { steampath, game, file = "./localization.json" } = options;
  if(!steampath || !game)
    return console.log("Missing required arguments")

  if(!_.includes(VALID_GAMES, game))
    return console.log("Game is invalid")

  return jackboxProcessorFactory[JACKBOX_PROCESSORS[command]](steampath, game,  file)
    .tap(() => console.log(`Starting to ${command} ${game}`))
    .then(jackboxProcessor => jackboxProcessor.run())
    .tap(() => console.log(`Finished!`))
}

processGame(options);