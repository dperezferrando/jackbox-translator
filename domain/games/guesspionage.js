export default {
  path: "The Jackbox Party Pack 3\\games\\PollPosition\\content",
  dataFiles: ["PollPositionQuestions", "PollPositionQuestions.jet", "PollPositionBonusQuestions", "PollPositionBonusQuestions.jet", "data.jet"],
  textProperties: ["v", "category"], // THE PROPERTIES THAT SHOULD BE TRANSLATED
  promptIdProperty: ["n"], // THE PROPERY THAT IDENTIFIES THAT OBJECT AS A POSSIBLE PROMPT TEXT
  promptsRegExp: ["PollQ", "QText", "Choice", "DataMode", "ExpResults", "Target"], // THE STRINGS THAT WILL BE USED AS REGEXP TO IDENTIFY A PROMPT USING promptIdProperty
  ignorePatterns: [], // PATTERNS THAT WILL BE IGNORED IF THEY ARE FOUND AS VALUE TO LOCALIZE
  arrayName: "content"
}