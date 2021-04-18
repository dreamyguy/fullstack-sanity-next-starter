import { validUrl } from '../../../frontend/src/utils/validUrlUtil';

export default {
  name: 'ReleaseURLs',
  title: 'Release URLs',
  description: 'Please provice the full URL',
  type: 'object',
  fields: [
    {
      name: 'spotifyReleaseID',
      title: 'Spotify Release ID',
      description: `This is how you find the '<ID>': single track: https://open.spotify.com/track/<ID> - multiple tracks: https://open.spotify.com/album/<ID>`,
      type: 'string',
      validation: Rule => Rule.required(),
    },
    {
      name: 'bandcampReleaseURL',
      title: 'Bandcamp Release URL',
      type: 'string',
      validation: Rule =>
        Rule.custom(name => {
          if (typeof name === 'undefined') {
            return true; // Allow undefined values
          }
          // This would crash if we didn't check for undefined values first
          return !validUrl(name) ? 'The URL must be valid!' : true;
        }).error(),
    },
    {
      name: 'bandcampShow',
      title: 'Show Bandcamp',
      type: 'boolean',
    },
    {
      name: 'appleMusicReleaseURL',
      title: 'Apple Music Release URL',
      type: 'string',
      validation: Rule =>
        Rule.custom(name => {
          if (typeof name === 'undefined') {
            return true; // Allow undefined values
          }
          // This would crash if we didn't check for undefined values first
          return !validUrl(name) ? 'The URL must be valid!' : true;
        }).error(),
    },
    {
      name: 'appleMusicShow',
      title: 'Show Apple Music',
      type: 'boolean',
    },
    {
      name: 'youtubeMusicReleaseURL',
      title: 'Youtube Music Release URL',
      type: 'string',
      validation: Rule =>
        Rule.custom(name => {
          if (typeof name === 'undefined') {
            return true; // Allow undefined values
          }
          // This would crash if we didn't check for undefined values first
          return !validUrl(name) ? 'The URL must be valid!' : true;
        }).error(),
    },
    {
      name: 'youtubeMusicShow',
      title: 'Show Youtube Music',
      type: 'boolean',
    },
    {
      name: 'amazonMusicReleaseURL',
      title: 'Amazon Music Release URL',
      type: 'string',
      validation: Rule =>
        Rule.custom(name => {
          if (typeof name === 'undefined') {
            return true; // Allow undefined values
          }
          // This would crash if we didn't check for undefined values first
          return !validUrl(name) ? 'The URL must be valid!' : true;
        }).error(),
    },
    {
      name: 'amazonMusicShow',
      title: 'Show Amazon Music',
      type: 'boolean',
    },
    {
      name: 'tidalReleaseURL',
      title: 'Tidal Release URL',
      type: 'string',
      validation: Rule =>
        Rule.custom(name => {
          if (typeof name === 'undefined') {
            return true; // Allow undefined values
          }
          // This would crash if we didn't check for undefined values first
          return !validUrl(name) ? 'The URL must be valid!' : true;
        }).error(),
    },
    {
      name: 'tidalShow',
      title: 'Show Tidal',
      type: 'boolean',
    },
    {
      name: 'deezerReleaseURL',
      title: 'Deezer Release URL',
      type: 'string',
      validation: Rule =>
        Rule.custom(name => {
          if (typeof name === 'undefined') {
            return true; // Allow undefined values
          }
          // This would crash if we didn't check for undefined values first
          return !validUrl(name) ? 'The URL must be valid!' : true;
        }).error(),
    },
    {
      name: 'deezerShow',
      title: 'Show Deezer',
      type: 'boolean',
    },
  ],
};
