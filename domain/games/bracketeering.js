export default {
  path: "The Jackbox Party Pack 4\\games\\\Bracketeering\\content",
  dataFiles: ["BRKPrompt.jet"],
  textProperties: ["category", "decoys", "text", "prompt", "twists"], // THE PROPERTIES THAT SHOULD BE TRANSLATED
  promptIdProperty: [], // THE PROPERY THAT IDENTIFIES THAT OBJECT AS A POSSIBLE PROMPT TEXT
  promptsRegExp: [], // THE STRINGS THAT WILL BE USED AS REGEXP TO IDENTIFY A PROMPT USING promptIdProperty
  ignorePatterns: [], // PATTERNS THAT WILL BE IGNORED IF THEY ARE FOUND AS VALUE TO LOCALIZE
  arrayName: "content"
}