import should from 'should';
import { PROMPT, PROMPT2, TRANSLATION, TRANSLATION2, NOT_PROMPT, NOT_TEXT, TEST_PROMPT, TEST_PROMPT2, jackboxLocalizator, localization } from "./helpers/fixture";

describe('Jackbox Localizator tests', () => {
  it('should replace original texts with ID', () => {

    jackboxLocalizator.processField(PROMPT)
      .should.have.properties( { "v": TRANSLATION, "s": TRANSLATION2 })
  });

  it("translation should be saved when processing field", () => {

    jackboxLocalizator.processField(PROMPT);
    jackboxLocalizator
      .localization
      .should.be.eql({ [TRANSLATION]: TEST_PROMPT, [TRANSLATION2]: TEST_PROMPT2 })

  });

  it('should not replace original text with ID', () => {

    jackboxLocalizator.processField(NOT_PROMPT)
      .should.value("v", NOT_TEXT)
  });

});