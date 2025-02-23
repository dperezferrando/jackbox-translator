export default {
  path: "The Jackbox Party Pack 3\\games\\Quiplash2\\content",
  dataFiles: ["QuiplashQuestion", "data.jet", "AudienceQuestion.jet","ComicLash.jet", "QuiplashQuestion.jet", "SafetyQuips.jet", "WordLash.jet", "WordLashWord.jet"],
  textProperties: ["v", "prompt", "quip", "value"], // THE PROPERTIES THAT SHOULD BE TRANSLATED
  promptIdProperty: ["n"], // THE PROPERY THAT IDENTIFIES THAT OBJECT AS A POSSIBLE PROMPT TEXT
  promptsRegExp: ["PromptText"], // THE STRINGS THAT WILL BE USED AS REGEXP TO IDENTIFY A PROMPT USING promptIdProperty
  ignorePatterns: [], // PATTERNS THAT WILL BE IGNORED IF THEY ARE FOUND AS VALUE TO LOCALIZE
  arrayName: "content" // THE NAME OF THE ARRAY THAT CONTAINS EVERY OBJECT IN THE DATAFILES
}