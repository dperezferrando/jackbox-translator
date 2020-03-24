import hash from "string-hash";

const TEST_PROMPT = "Test Prompt";

export const TRANSLATION = `TRANSLATION_${hash(TEST_PROMPT)}`;

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
