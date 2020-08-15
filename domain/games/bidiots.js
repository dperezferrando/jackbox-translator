export default {
  path: "The Jackbox Party Pack 2\\games\\Auction",
  dataFiles: ["content", "messages.jet", "AuctionCategory.jet"],
  textProperties: ["text", "content", "prompts", "category", "firstLoan", "bankReminder", "brokeEven", "doNotScrew", "dog", "firstInfo", "goodJobOnLastAuction", "gregFromBombCorp", "highestValueStillOutThere", "loss", "notBidding", "notBuying", "oldManFromBombCorp", "openedBankWithoutTakingLoan", "otherPlayerKnowsHint", "ownArt", "random", "requestPlayerArt", "revealWinner", "revengeScrew", "rivalry", "secondAuctionMessage", "thirdLoan", "doNotScrew", "loss"], // THE PROPERTIES THAT SHOULD BE TRANSLATED
  promptIdProperty: ["bankReminder"], // THE PROPERY THAT IDENTIFIES THAT OBJECT AS A POSSIBLE PROMPT TEXT
  promptsRegExp: [".+"], // THE STRINGS THAT WILL BE USED AS REGEXP TO IDENTIFY A PROMPT USING promptIdProperty
  ignorePatterns: [], // PATTERNS THAT WILL BE IGNORED IF THEY ARE FOUND AS VALUE TO LOCALIZE
  arrayName: "content"
}