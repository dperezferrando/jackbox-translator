import hash from "string-hash";
import pushTheButton from "../../domain/games/pushTheButton";
import JackboxLocalizator from "../../domain/jackboxLocalizator";
import JackboxTranslator from "../../domain/jackboxTranslator";

export const TEST_PROMPT = "Test Prompt";

export const TRANSLATION = `TRANSLATION_${hash(TEST_PROMPT)}`;
export const NOT_TEXT = "This shouldn't be translated"
export const TRANSLATED_TEXT = "Consigna de Prueba";

export const PROMPT = {
    "n": "HumanPromptText",
    "t": "S",
    "v": TEST_PROMPT
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
    "v": TRANSLATION
}

export const LOCALIZED_PROMPT2 = {
  "n": "HumanPromptAudio",
  "s": TRANSLATION,
  "t": "A",
  "v": "805277_0"
}

const localization = { [TRANSLATION]: TRANSLATED_TEXT };

export const jackboxLocalizator = new JackboxLocalizator("", pushTheButton);
export const jackboxTranslator = new JackboxTranslator("", pushTheButton, localization);