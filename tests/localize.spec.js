import should from 'should';
import { PROMPT, PROMPT2, TRANSLATION } from "./helpers/fixture";
import { replaceWithIdIfPrompt } from "../localize";

describe('Localization tests', () => {
  it('should replace original text with ID', () => {

    replaceWithIdIfPrompt(PROMPT)
      .should.value("v", TRANSLATION)

     replaceWithIdIfPrompt(PROMPT2)
      .should.value("s", TRANSLATION)

  });
});