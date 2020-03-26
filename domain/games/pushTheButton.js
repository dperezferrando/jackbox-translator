export default {
  path: "The Jackbox Party Pack 6\\games\\PushTheButton\\content",
  dataFiles: ["PushTheButtonDrawingTests", "PushTheButtonMoralityTests", "PushTheButtonRatingTests", "PushTheButtonWritingTests", "data.jet"],
  textProperties: ["v"], // THE PROPERTIES THAT SHOULD BE TRANSLATED ORDER IS IMPORTANT
  promptIdProperty: ["n"], // THE PROPERY THAT IDENTIFIES THAT OBJECT AS A POSSIBLE PROMPT TEXT
  promptsRegExp: ["Text", "HumanPromptAudio"], // THE STRINGS THAT WILL BE USED AS REGEXP TO IDENTIFY A PROMPT USING promptIdProperty
  arrayName: "fields"
}