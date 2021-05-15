// Replace all occurences of special characters on string, so that they become URL-friendly
const replacements = [
  [/Å/g, 'A'],
  [/Æ/g, 'AE'],
  [/Ø/g, 'O'],
  [/Ä/g, 'A'],
  [/Ë/g, 'E'],
  [/Ï/g, 'I'],
  [/Ö/g, 'O'],
  [/Ü/g, 'U'],
  [/Á/g, 'A'],
  [/É/g, 'E'],
  [/Í/g, 'I'],
  [/Ó/g, 'O'],
  [/Ú/g, 'U'],
  [/å/g, 'a'],
  [/æ/g, 'ae'],
  [/ø/g, 'o'],
  [/ä/g, 'a'],
  [/ë/g, 'e'],
  [/ï/g, 'i'],
  [/ö/g, 'o'],
  [/ü/g, 'u'],
  [/á/g, 'a'],
  [/é/g, 'e'],
  [/í/g, 'i'],
  [/ó/g, 'o'],
  [/ú/g, 'u'],
  [/'"/g, ''],
  [/\s/g, '-'],
];

export const replaceSpecialChars = str => {
  let output = str || '';
  if (output) {
    replacements.map(rep => {
      output = output.replace(rep[0], rep[1]);
      return null;
    });
  }
  if (process.env.NODE_ENV !== 'test') {
    // eslint-disable-next-line
    console.error(
      `[replaceSpecialChars]: The string being passed is not a string, or not passed at all: ${str}, type: (${typeof str})`,
    );
  }
  return output;
};
