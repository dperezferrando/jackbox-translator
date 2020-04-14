import should from 'should';
import { LOCALIZED_PROMPT, LOCALIZED_PROMPT2, LOCALIZED_PROMPT3, LOCALIZED_PROMPT4, LOCALIZED_PROMPT5, TRANSLATED_TEXT, TRANSLATED_TEXT2, TRANSLATED_TEXT3, TRANSLATED_TEXT4, TRANSLATED_TEXT5, TRANSLATED_TEXT6, jackboxTranslator } from "./helpers/fixture";

describe('Jackbox Translator', () => {
  it('should translate field correctly', () => {
    jackboxTranslator.processField(LOCALIZED_PROMPT)
      .should.have.properties({ "v": TRANSLATED_TEXT, "s": TRANSLATED_TEXT2 })
  });

  it('should translate array field correctly', () => {
    jackboxTranslator.processField(LOCALIZED_PROMPT3)
      .should.have.properties({ "v": TRANSLATED_TEXT3  })
  });


  it('should translate recursively', () => {
    jackboxTranslator.processField(LOCALIZED_PROMPT4)
      .should.have.properties({ "v": {id: 1, "v": TRANSLATED_TEXT4}  })
  });

  it('should translate array field recursively', () => {
    jackboxTranslator.processField(LOCALIZED_PROMPT5)
      .should.have.properties({ "v": [{id: 1, "v": TRANSLATED_TEXT5}, {id: 2, "v": TRANSLATED_TEXT6}]  })
  });


});