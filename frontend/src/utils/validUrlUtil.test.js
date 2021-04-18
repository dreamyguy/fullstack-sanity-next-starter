import { validUrl } from './validUrlUtil';

const testCases = [
  {
    name: 'bandcamp',
    input: 'http://sidhree.bandcamp.com/track/futures-past',
    output: true,
  },
  {
    name: 'appleMusic',
    input: 'https://music.apple.com/no/album/futures-past-ep/1221063539',
    output: true,
  },
  {
    name: 'youtubeMusic',
    input: 'https://music.youtube.com/watch?v=GsSzZcTpJ00',
    output: true,
  },
  {
    name: 'amazonMusic',
    input: 'https://www.amazon.com/Futures-Past-Wallace-Sidhr%C3%A9e/dp/B06XXS9635/',
    output: true,
  },
  {
    name: 'tidal',
    input: 'https://tidal.com/track/72191707',
    output: true,
  },
  {
    name: 'deezer',
    input: 'https://www.deezer.com/us/album/15810634',
    output: true,
  },
];

describe('validUrl', () => {
  testCases.map(t => {
    it(`'${t.name}': ${t.input} -> ${t.output}`, () => {
      const testInput = validUrl(t.input);
      const testOutput = t.output;
      expect(testInput).toBe(testOutput);
    });
    return null;
  });
});
