import should from 'should';
import { PROMPT, PROMPT2, PROMPT3, PROMPT4, TRANSLATION, TRANSLATION2, TRANSLATION3, TRANSLATION4, NOT_PROMPT, NOT_TEXT, TEST_PROMPT, TEST_PROMPT2, jackboxLocalizator, localization } from "./helpers/fixture";

describe('Jackbox Localizator', () => {
  it('should replace original texts with ID', () => {

    jackboxLocalizator.processField(PROMPT)
      .should.have.properties( { "v": TRANSLATION, "s": TRANSLATION2 })
  });


  it('should replace only one text with ID', () => {

    jackboxLocalizator.processField(PROMPT2)
      .should.have.properties( { "v": TRANSLATION })
  });

  it('should replace all the values of the array', () => {

    jackboxLocalizator.processField(PROMPT3)
      .should.have.properties({ "v": TRANSLATION3 })
  });

  it('should recursively process field', () => {

    jackboxLocalizator.processField(PROMPT4)
      .should.have.properties({ "v": { id: 1, "v": TRANSLATION4 } })
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

  afterEach(() => {
    jackboxLocalizator.localization = {};
  });

});