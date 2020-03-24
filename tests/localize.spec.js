import should from 'should';
import { promptExample, TRANSLATION } from "./helpers/fixture";
import { replaceWithIdIfPrompt } from "../localize";
describe('Localization tests', () => {
  it('should replace original text with ID', () => {

    replaceWithIdIfPrompt(promptExample)
      .should.value("v", TRANSLATION)
  });
});