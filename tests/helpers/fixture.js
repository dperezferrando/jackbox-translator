import hash from "string-hash";

const TEST_PROMPT = "Test Prompt";

export const TRANSLATION = `TRANSLATION_${hash(TEST_PROMPT)}`;

export const promptExample = {
    "n": "HumanPromptText",
    "t": "S",
    "v": TEST_PROMPT
}
