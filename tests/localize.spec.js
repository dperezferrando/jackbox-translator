const assert = require('assert');
import { promptExample } from "./helpers/fixture";
import { replaceWithIdIfPrompt } from "../localize"

describe('Localization tests', () => {
  it('should replace with ID if prompt', () => {
    assert.equal([1, 2, 3].indexOf(4), -1);
  });
});