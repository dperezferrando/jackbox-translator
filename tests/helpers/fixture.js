import hash from "string-hash";
import pushTheButton from "../../domain/games/pushTheButton";
import JackboxLocalizator from "../../domain/jackboxLocalizator";

export const TEST_PROMPT = "Test Prompt";

export const TRANSLATION = `TRANSLATION_${hash(TEST_PROMPT)}`;
export const NOT_TEXT = "This shouldn't be translated"

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


export const jackboxLocalizator = new JackboxLocalizator("", pushTheButton);