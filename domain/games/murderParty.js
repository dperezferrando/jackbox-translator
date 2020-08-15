export default {
  path: "The Jackbox Party Pack 3\\games\\TriviaDeath\\content",
  dataFiles: ["TDWorstDrawing", "TDWorstDrawing.jet", "TDWorstResponse", "TDWorstResponse.jet", "data.jet", "TDFinalRound.jet", "TDQuestion.jet"],
  textProperties: ["v", "choices", "text", "category"], // THE PROPERTIES THAT SHOULD BE TRANSLATED
  promptIdProperty: ["n"], // THE PROPERY THAT IDENTIFIES THAT OBJECT AS A POSSIBLE PROMPT TEXT
  promptsRegExp: ["QuestionText", "Category", "AlternateSpellings"], // THE STRINGS THAT WILL BE USED AS REGEXP TO IDENTIFY A PROMPT USING promptIdProperty
  ignorePatterns: [], // PATTERNS THAT WILL BE IGNORED IF THEY ARE FOUND AS VALUE TO LOCALIZE
  arrayName: "content"
}