export default {
  path: "The Jackbox Party Pack 4\\games\\Fibbage3\\content",
  dataFiles: ["fibbageshortie", "fibbageshortie.jet", "finalfibbage", "finalfibbage.jet", "fibbagespecial", "fibbagespecial.jet", "tmishortie", "tmishortie.jet","data.jet"],
  textProperties: ["category", "v", "personal"], // THE PROPERTIES THAT SHOULD BE TRANSLATED
  promptIdProperty: ["n"], // THE PROPERY THAT IDENTIFIES THAT OBJECT AS A POSSIBLE PROMPT TEXT
  promptsRegExp: ["Text", "Suggestions", "Category", "AlternateSpellings"], // THE STRINGS THAT WILL BE USED AS REGEXP TO IDENTIFY A PROMPT USING promptIdProperty
  ignorePatterns: [], // PATTERNS THAT WILL BE IGNORED IF THEY ARE FOUND AS VALUE TO LOCALIZE
  arrayName: "content"
}