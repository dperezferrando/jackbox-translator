import hash from "string-hash";
import pushTheButton from "../../domain/games/pushTheButton";
import JackboxLocalizator from "../../domain/jackboxLocalizator";
import JackboxTranslator from "../../domain/jackboxTranslator";
import Game from "../../domain/games/game";

export const TEST_PROMPT = "Test Prompt";
export const TEST_PROMPT2 = "Test Prompt 2";
export const TEST_PROMPT3 =  [TEST_PROMPT, TEST_PROMPT2];
export const TEST_PROMPT4 =  "Test Prompt 4";
export const TEST_PROMPT5 =  "Test Prompt 5";
export const TEST_PROMPT6 =  "Test Prompt 6";

export const TRANSLATION = `TRANSLATION_${hash(TEST_PROMPT)}`;
export const TRANSLATION2 = `TRANSLATION_${hash(TEST_PROMPT2)}`;
export const TRANSLATION3 = [TRANSLATION, TRANSLATION2]
export const TRANSLATION4 = `TRANSLATION_${hash(TEST_PROMPT4)}`;
export const TRANSLATION5 = `TRANSLATION_${hash(TEST_PROMPT5)}`;
export const TRANSLATION6 = `TRANSLATION_${hash(TEST_PROMPT6)}`;
export const NOT_TEXT = "This shouldn't be translated"
export const TRANSLATED_TEXT = "Consigna de Prueba";
export const TRANSLATED_TEXT2 = "Consigna de Prueba 2";
export const TRANSLATED_TEXT3 = [TRANSLATED_TEXT, TRANSLATED_TEXT2];
export const TRANSLATED_TEXT4 = "Consigna de Prueba 4";
export const TRANSLATED_TEXT5 = "Consigna de Prueba 5";
export const TRANSLATED_TEXT6 = "Consigna de Prueba 6";

export const PROMPT = {
    "n": "HumanPromptText",
    "t": "S",
    "v": TEST_PROMPT,
    "s": TEST_PROMPT2
}

export const PROMPT2 = {
    "n": "HumanPromptText",
    "t": "S",
    "v": TEST_PROMPT
}

export const PROMPT3 = {
    "n": "HumanPromptText",
    "t": "S",
    "v": TEST_PROMPT3
}

export const PROMPT4 = {
    "n": "HumanPromptText",
    "t": "S",
    "v": {
      "id": 1,
      "v": TEST_PROMPT4
    }
}

export const PROMPT5 = {
    "n": "HumanPromptText",
    "t": "S",
    "v": [{
      "id": 1,
      "v": TEST_PROMPT5
    },{
      "id": 2,
      "v": TEST_PROMPT6
    }]
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

export const LOCALIZED_PROMPT3 = {
  "n": "HumanPromptText",
  "t": "S",
  "v": TRANSLATION3,
}

export const LOCALIZED_PROMPT4 = {
  "n": "HumanPromptText",
  "t": "S",
  "v": {
    "id": 1,
    "v": TRANSLATION4
  }
}

export const LOCALIZED_PROMPT5 = {
    "n": "HumanPromptText",
    "t": "S",
    "v": [{
      "id": 1,
      "v": TRANSLATION5
    },{
      "id": 2,
      "v": TRANSLATION6
    }]
}


const localization = { 
  [TRANSLATION]: TRANSLATED_TEXT,
  [TRANSLATION2]: TRANSLATED_TEXT2,
  [TRANSLATION3]: TRANSLATED_TEXT3,
  [TRANSLATION4]: TRANSLATED_TEXT4,
  [TRANSLATION5]: TRANSLATED_TEXT5,
  [TRANSLATION6]: TRANSLATED_TEXT6
};

const gameSettings = { ...pushTheButton, textProperties: ["v", "s"] }

export const jackboxLocalizator = new JackboxLocalizator("", new Game(gameSettings));
export const jackboxTranslator = new JackboxTranslator("", new Game(gameSettings), localization);