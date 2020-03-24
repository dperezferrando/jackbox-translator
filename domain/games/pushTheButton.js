export default {
  path: "The Jackbox Party Pack 6\\games\\PushTheButton\\content",
  folders: ["PushTheButtonDrawingTests", "PushTheButtonMoralityTests", "PushTheButtonRatingTests", "PushTheButtonWritingTests"],
  textProperties: ["s", "v"], // THE PROPERTIES THAT SHOULD BE TRANSLATED ORDER IS IMPORTANT
  promptIdProperty: ["n"], // THE PROPERY THAT IDENTIFIES THAT OBJECT AS A POSSIBLE PROMPT TEXT
  promptsRegExp: ["Text", "HumanPromptAudio"], // THE STRINGS THAT WILL BE USED AS REGEXP TO IDENTIFY A PROMPT USING promptIdProperty
  dataFile: "data.jet"
}