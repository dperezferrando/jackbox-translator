export default {
  path: "The Jackbox Party Pack 6\\games\\TriviaDeath2\\content",
  dataFiles: ["TDQuestion", "TDMindMeld", "TDFinalRound", "QuiplashContent", "data.jet","QuiplashContent.jet", "TDFinalRound.jet", "TDMindMeld.jet", "TDMirror.jet", "TDQuestion.jet", "TDQuestionBomb.jet", "TDQuestionGhost.jet", "TDQuestionHat.jet", "TDQuestionKnife.jet", "TDQuestionMadness.jet", "TDQuestionWig.jet"],
  textProperties: ["v", "s", "prompt", "text", "alt", "answer", "answers", "lines", "points", "password", "choices"], // THE PROPERTIES THAT SHOULD BE TRANSLATED
  promptIdProperty: ["n"], // THE PROPERY THAT IDENTIFIES THAT OBJECT AS A POSSIBLE PROMPT TEXT
  promptsRegExp: ["^Q$", "PromptText"], // THE STRINGS THAT WILL BE USED AS REGEXP TO IDENTIFY A PROMPT USING promptIdProperty
  arrayName: "content"
}