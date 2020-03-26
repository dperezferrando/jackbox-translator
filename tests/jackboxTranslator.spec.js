import should from 'should';
import { LOCALIZED_PROMPT, LOCALIZED_PROMPT2, TRANSLATED_TEXT, TRANSLATED_TEXT2, jackboxTranslator } from "./helpers/fixture";

describe('Jackbox Translator tests', () => {
  it('should translate field correctly', () => {
    jackboxTranslator.processField(LOCALIZED_PROMPT)
      .should.have.properties({ "v": TRANSLATED_TEXT, "s": TRANSLATED_TEXT2 })

  });

});