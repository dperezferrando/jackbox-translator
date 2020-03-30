export default {
  path: "The Jackbox Party Pack 2\\games\\Quiplash\\content",
  dataFiles: ["QuiplashQuestion", "data.jet", "QuiplashQuestion.jet"],
  textProperties: ["v", "prompt"], // THE PROPERTIES THAT SHOULD BE TRANSLATED
  promptIdProperty: ["n"], // THE PROPERY THAT IDENTIFIES THAT OBJECT AS A POSSIBLE PROMPT TEXT
  promptsRegExp: ["PromptText"], // THE STRINGS THAT WILL BE USED AS REGEXP TO IDENTIFY A PROMPT USING promptIdProperty
  arrayName: "content" // THE NAME OF THE ARRAY THAT CONTAINS EVERY OBJECT IN THE DATAFILES
}