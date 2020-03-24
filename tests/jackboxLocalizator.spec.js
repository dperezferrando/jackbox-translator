import should from 'should';
import { PROMPT, PROMPT2, TRANSLATION, NOT_PROMPT, NOT_TEXT, TEST_PROMPT, jackboxLocalizator } from "./helpers/fixture";

describe('Jackbox Localizator tests', () => {
  it('should replace original text with ID', () => {

    jackboxLocalizator.processField(PROMPT)
      .should.value("v", TRANSLATION)

     jackboxLocalizator.processField(PROMPT2)
      .should.value("s", TRANSLATION)

  });

  it("translation should be saved when processing field", () => {

    jackboxLocalizator.processField(PROMPT);
    jackboxLocalizator
      .localization
      .should.be.eql({ [TRANSLATION]: TEST_PROMPT })

  });

  it('should not replace original text with ID', () => {

    jackboxLocalizator.processField(NOT_PROMPT)
      .should.value("v", NOT_TEXT)
  });

  it("if 's' is present 'v' shouldn't be translated", () => {

    jackboxLocalizator.processField(PROMPT2)
      .should.not.value("v", TRANSLATION)

  });


});