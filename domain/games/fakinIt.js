export default {
  path: "The Jackbox Party Pack 3\\games\\FakinIt\\content",
  dataFiles: ["FakinItCategories.jet", "FakinItInput", "FakinItInput.jet", "FakinItTasks", "FakinItTasks.jet", "data.jet"],
  textProperties: ["v", "category", "name", "tasks"], // THE PROPERTIES THAT SHOULD BE TRANSLATED
  promptIdProperty: ["n"], // THE PROPERY THAT IDENTIFIES THAT OBJECT AS A POSSIBLE PROMPT TEXT
  promptsRegExp: ["TaskText"], // THE STRINGS THAT WILL BE USED AS REGEXP TO IDENTIFY A PROMPT USING promptIdProperty
  ignorePatterns: [], // PATTERNS THAT WILL BE IGNORED IF THEY ARE FOUND AS VALUE TO LOCALIZE
  arrayName: "content"
}