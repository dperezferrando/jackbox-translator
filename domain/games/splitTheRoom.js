export default {
  path: "The Jackbox Party Pack 5\\games\\SplitTheRoom\\content",
  dataFiles: ["SplitTheRoomFinal", "SplitTheRoomLater", "SplitTheRoomShortie", "SplitTheRoomFinal.jet", "SplitTheRoomLater.jet", "SplitTheRoomShortie.jet", "data.jet"],
  textProperties: ["answerText", "category", "decoys", "questionText", "scenarioText", "v"], // THE PROPERTIES THAT SHOULD BE TRANSLATED
  promptIdProperty: ["n"], // THE PROPERY THAT IDENTIFIES THAT OBJECT AS A POSSIBLE PROMPT TEXT
  promptsRegExp: ["ScenarioText[0-9]?$", "QuestionText[0-9]?$", "Decoys", "Answer"], // THE STRINGS THAT WILL BE USED AS REGEXP TO IDENTIFY A PROMPT USING promptIdProperty
  ignorePatterns: [], // PATTERNS THAT WILL BE IGNORED IF THEY ARE FOUND AS VALUE TO LOCALIZE
  arrayName: "content" // THE NAME OF THE ARRAY THAT CONTAINS EVERY OBJECT IN THE DATAFILES
}