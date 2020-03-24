import should from 'should';
import { PROMPT, PROMPT2, TRANSLATION, NOT_PROMPT, NOT_TEXT } from "./helpers/fixture";
import { replaceWithIdIfPrompt } from "../localize";

describe('Localization tests', () => {
  it('should replace original text with ID', () => {

    replaceWithIdIfPrompt(PROMPT)
      .should.value("v", TRANSLATION)

     replaceWithIdIfPrompt(PROMPT2)
      .should.value("s", TRANSLATION)

  });

  it('should not replace original text with ID', () => {

    replaceWithIdIfPrompt(NOT_PROMPT)
      .should.value("v", NOT_TEXT)
  });

});