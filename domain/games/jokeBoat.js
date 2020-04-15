export default {
  path: "The Jackbox Party Pack 6\\games\\Jokeboat\\content",
  dataFiles: ["JokeboatAnimal.jet", "JokeboatBrand.jet", "JokeboatCaptainLog.jet", "JokeboatCaptainLogFinal.jet", "JokeboatCatchphrase.jet", "JokeboatCatchphraseFill.jet", "JokeboatFood.jet", "JokeboatLocation.jet", "JokeboatObject.jet", "JokeboatPerson.jet", "JokeboatSetup.jet", "JokeboatThings.jet"],
  textProperties: ["v", "topic", "log", "decoys", "punchline", "setup"], // THE PROPERTIES THAT SHOULD BE TRANSLATED
  promptIdProperty: [], // THE PROPERY THAT IDENTIFIES THAT OBJECT AS A POSSIBLE PROMPT TEXT
  promptsRegExp: [], // THE STRINGS THAT WILL BE USED AS REGEXP TO IDENTIFY A PROMPT USING promptIdProperty
  ignorePatterns: [], // PATTERNS THAT WILL BE IGNORED IF THEY ARE FOUND AS VALUE TO LOCALIZE
  arrayName: "content"
}