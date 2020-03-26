import hash from "string-hash";
import pushTheButton from "../../domain/games/pushTheButton";
import JackboxLocalizator from "../../domain/jackboxLocalizator";
import JackboxTranslator from "../../domain/jackboxTranslator";
import Game from "../../domain/games/game";

export const TEST_PROMPT = "Test Prompt";
export const TEST_PROMPT2 = "Test Prompt 2";

export const TRANSLATION = `TRANSLATION_${hash(TEST_PROMPT)}`;
export const TRANSLATION2 = `TRANSLATION_${hash(TEST_PROMPT2)}`;
export const NOT_TEXT = "This shouldn't be translated"
export const TRANSLATED_TEXT = "Consigna de Prueba";
export const TRANSLATED_TEXT2 = "Consigna de Prueba 2";

export const PROMPT = {
    "n": "HumanPromptText",
    "t": "S",
    "v": TEST_PROMPT,
    "s": TEST_PROMPT2
}

export const PROMPT2 = {
  "n": "HumanPromptAudio",
  "s": TEST_PROMPT,
  "t": "A",
  "v": "805277_0"
}

export const NOT_PROMPT = {
  "n": "AlienPromptAdultt1",
  "t": "S",
  "v": NOT_TEXT
};

export const LOCALIZED_PROMPT = {
    "n": "HumanPromptText",
    "t": "S",
    "v": TRANSLATION,
    "s": TRANSLATION2
}

export const LOCALIZED_PROMPT2 = {
  "n": "HumanPromptAudio",
  "s": TRANSLATION,
  "t": "A",
  "v": "805277_0"
}

const localization = { [TRANSLATION]: TRANSLATED_TEXT, [TRANSLATION2]: TRANSLATED_TEXT2 };

const gameSettings = { ...pushTheButton, textProperties: ["v", "s"] }

export const jackboxLocalizator = new JackboxLocalizator("", new Game(gameSettings));
export const jackboxTranslator = new JackboxTranslator("", new Game(gameSettings), localization);