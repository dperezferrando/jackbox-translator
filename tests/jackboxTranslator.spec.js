import should from 'should';
import { LOCALIZED_PROMPT, LOCALIZED_PROMPT2, TRANSLATED_TEXT, jackboxTranslator } from "./helpers/fixture";

describe('Jackbox Translator tests', () => {
  it('should translate field correctly', () => {
    jackboxTranslator.processField(LOCALIZED_PROMPT)
      .should.value("v", TRANSLATED_TEXT)

    jackboxTranslator.processField(LOCALIZED_PROMPT2)
      .should.value("s", TRANSLATED_TEXT)

  });

});