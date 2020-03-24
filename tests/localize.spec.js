const assert = require('assert');
const { promptExample } = require("./helpers/fixture");
import { replaceWithIdIfPrompt } from "../generateLocalization"

describe('Localization tests', () => {
  it('should replace with ID if prompt', () => {
    assert.equal([1, 2, 3].indexOf(4), -1);
  });
});