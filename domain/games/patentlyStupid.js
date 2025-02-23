export default {
  path: "The Jackbox Party Pack 5\\games\\PatentlyStupid\\content",
  dataFiles: ["PatentlyStupidGeneDrawing", "PatentlyStupidShortie", "PatentlyStupidShortie.jet", "PatentlyStupidGeneDrawing.jet", "data.jet"],
  textProperties: ["Title", "decoys", "prompt", "v"], // THE PROPERTIES THAT SHOULD BE TRANSLATED
  promptIdProperty: ["n"], // THE PROPERY THAT IDENTIFIES THAT OBJECT AS A POSSIBLE PROMPT TEXT
  promptsRegExp: ["Title", "Tagline", "Decoys", "PromptText"], // THE STRINGS THAT WILL BE USED AS REGEXP TO IDENTIFY A PROMPT USING promptIdProperty
  ignorePatterns: [], // PATTERNS THAT WILL BE IGNORED IF THEY ARE FOUND AS VALUE TO LOCALIZE
  arrayName: "content" // THE NAME OF THE ARRAY THAT CONTAINS EVERY OBJECT IN THE DATAFILES
}