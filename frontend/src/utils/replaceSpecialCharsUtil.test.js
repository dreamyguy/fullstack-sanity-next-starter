import { replaceSpecialChars } from './replaceSpecialCharsUtil';

const pangramNorwegian = [
  'Du åt ca fire wienerpølser og tok taxi hjem fra byen etter å ha vunnet en sær quiz',
  'IQ-løs WC-boms uten hørsel skjærer god pizza på xylofon',
  'Vår sære Zulu fra badeøya spilte jo whist og quickstep i min taxi',
  'Sær golfer med kølle vant sexquiz på WC i hjemby',
  'Jeg begynte å fortære en sandwich mens jeg kjørte taxi på vei til quiz',
  'Xylofonisten kjøpte en sandwich med roquefort og blåbær ved Zaire',
];

const pangramNorwegianSlugified = [
  'Du-at-ca-fire-wienerpolser-og-tok-taxi-hjem-fra-byen-etter-a-ha-vunnet-en-saer-quiz',
  'IQ-los-WC-boms-uten-horsel-skjaerer-god-pizza-pa-xylofon',
  'Var-saere-Zulu-fra-badeoya-spilte-jo-whist-og-quickstep-i-min-taxi',
  'Saer-golfer-med-kolle-vant-sexquiz-pa-WC-i-hjemby',
  'Jeg-begynte-a-fortaere-en-sandwich-mens-jeg-kjorte-taxi-pa-vei-til-quiz',
  'Xylofonisten-kjopte-en-sandwich-med-roquefort-og-blabaer-ved-Zaire',
];

describe('replaceSpecialChars', () => {
  pangramNorwegian.map((p, i) => {
    it(`replace nordic chars -> ${p}`, () => {
      const testInput = replaceSpecialChars(p);
      const testOutput = pangramNorwegianSlugified[i];
      expect(testInput).toEqual(testOutput);
    });
    return null;
  });
});
