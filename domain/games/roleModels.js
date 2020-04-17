export default {
  path: "The Jackbox Party Pack 6\\games\\RoleModels\\content",
  dataFiles: ["RMDataAnalysis.jet", "RMPopCulturePrompt.jet", "RMSituationalPrompt.jet", "RMDataAnalysis", "RMPopCulturePrompt", "RMSituationalPrompt", "data.jet"],
  textProperties: ["s", "contradiction", "altSpellings", "correct", "reveals", "opposite", "prompt", "same", "category", "prompts", "name", "short", "question", "roles", "tags"], // THE PROPERTIES THAT SHOULD BE TRANSLATED
  promptIdProperty: ["n"], // THE PROPERY THAT IDENTIFIES THAT OBJECT AS A POSSIBLE PROMPT TEXT
  promptsRegExp: ["^Prompt$", "RevealPrompt"], // THE STRINGS THAT WILL BE USED AS REGEXP TO IDENTIFY A PROMPT USING promptIdProperty
  ignorePatterns: [], // PATTERNS THAT WILL BE IGNORED IF THEY ARE FOUND AS VALUE TO LOCALIZE
  arrayName: "content"
}