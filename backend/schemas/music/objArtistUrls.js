export default {
  name: 'ArtistURLs',
  title: 'Artist URLs',
  description: 'Please provice the full URL',
  type: 'object',
  fields: [
    {
      name: 'bandcampArtistURL',
      title: 'Bandcamp Artist URL',
      type: 'string',
      validation: Rule =>
        Rule.custom(name => {
          if (typeof name === 'undefined') {
            return true; // Allow undefined values
          }
          // This would crash if we didn't check for undefined values first
          return !name.match(/^[a-zA-Z0-9_-]*$/g) ? 'The string must be URL-friendly!' : true;
        }).error(),
    },
    {
      name: 'appleMusicArtistURL',
      title: 'Apple Music Artist URL',
      type: 'string',
      validation: Rule =>
        Rule.custom(name => {
          if (typeof name === 'undefined') {
            return true; // Allow undefined values
          }
          // This would crash if we didn't check for undefined values first
          return !name.match(/^[a-zA-Z0-9_-]*$/g) ? 'The string must be URL-friendly!' : true;
        }).error(),
    },
    {
      name: 'amazonMusicArtistURL',
      title: 'Amazon Music Artist URL',
      type: 'string',
      validation: Rule =>
        Rule.custom(name => {
          if (typeof name === 'undefined') {
            return true; // Allow undefined values
          }
          // This would crash if we didn't check for undefined values first
          return !name.match(/^[a-zA-Z0-9_-]*$/g) ? 'The string must be URL-friendly!' : true;
        }).error(),
    },
    {
      name: 'tidalArtistURL',
      title: 'Tidal Artist URL',
      type: 'string',
      validation: Rule =>
        Rule.custom(name => {
          if (typeof name === 'undefined') {
            return true; // Allow undefined values
          }
          // This would crash if we didn't check for undefined values first
          return !name.match(/^[a-zA-Z0-9_-]*$/g) ? 'The string must be URL-friendly!' : true;
        }).error(),
    },
    {
      name: 'deezerArtistURL',
      title: 'Deezer Artist URL',
      type: 'string',
      validation: Rule =>
        Rule.custom(name => {
          if (typeof name === 'undefined') {
            return true; // Allow undefined values
          }
          // This would crash if we didn't check for undefined values first
          return !name.match(/^[a-zA-Z0-9_-]*$/g) ? 'The string must be URL-friendly!' : true;
        }).error(),
    },
    {
      name: 'cdbabyArtistURL',
      title: 'CDBaby Artist URL',
      type: 'string',
      validation: Rule =>
        Rule.custom(name => {
          if (typeof name === 'undefined') {
            return true; // Allow undefined values
          }
          // This would crash if we didn't check for undefined values first
          return !name.match(/^[a-zA-Z0-9_-]*$/g) ? 'The string must be URL-friendly!' : true;
        }).error(),
    },
    {
      name: 'napsterArtistURL',
      title: 'Napster Artist URL',
      type: 'string',
      validation: Rule =>
        Rule.custom(name => {
          if (typeof name === 'undefined') {
            return true; // Allow undefined values
          }
          // This would crash if we didn't check for undefined values first
          return !name.match(/^[a-zA-Z0-9_-]*$/g) ? 'The string must be URL-friendly!' : true;
        }).error(),
    },
    {
      name: 'saavnArtistURL',
      title: 'Saavn Artist URL',
      type: 'string',
      validation: Rule =>
        Rule.custom(name => {
          if (typeof name === 'undefined') {
            return true; // Allow undefined values
          }
          // This would crash if we didn't check for undefined values first
          return !name.match(/^[a-zA-Z0-9_-]*$/g) ? 'The string must be URL-friendly!' : true;
        }).error(),
    },
    {
      name: 'shazamArtistURL',
      title: 'Shazam Artist URL',
      type: 'string',
      validation: Rule =>
        Rule.custom(name => {
          if (typeof name === 'undefined') {
            return true; // Allow undefined values
          }
          // This would crash if we didn't check for undefined values first
          return !name.match(/^[a-zA-Z0-9_-]*$/g) ? 'The string must be URL-friendly!' : true;
        }).error(),
    },
    {
      name: 'slackerRadioArtistURL',
      title: 'Slacker Radio Artist URL',
      type: 'string',
      validation: Rule =>
        Rule.custom(name => {
          if (typeof name === 'undefined') {
            return true; // Allow undefined values
          }
          // This would crash if we didn't check for undefined values first
          return !name.match(/^[a-zA-Z0-9_-]*$/g) ? 'The string must be URL-friendly!' : true;
        }).error(),
    },
  ],
};
