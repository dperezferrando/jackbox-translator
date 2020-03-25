export default {
  path: "The Jackbox Party Pack 5\\games\\PatentlyStupid\\content",
  dataFiles: ["PatentlyStupidGeneDrawing", "PatentlyStupidShortie", "PatentlyStupidShortie.jet", "PatentlyStupidGeneDrawing.jet"],
  textProperties: ["Title", "decoys", "prompt"], // THE PROPERTIES THAT SHOULD BE TRANSLATED ORDER IS IMPORTANT
  promptIdProperty: ["n"], // THE PROPERY THAT IDENTIFIES THAT OBJECT AS A POSSIBLE PROMPT TEXT
  promptsRegExp: ["Title", "Tagline", "Decoys", "PromptText"], // THE STRINGS THAT WILL BE USED AS REGEXP TO IDENTIFY A PROMPT USING promptIdProperty
  arrayName: "content" // THE NAME OF THE ARRAY THAT CONTAINS EVERY OBJECT IN THE DATAFILES
}