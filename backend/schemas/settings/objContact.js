export default {
  name: 'Contact',
  title: 'Contact',
  type: 'object',
  fields: [
    {
      name: 'email',
      title: 'Email',
      type: 'string',
    },
    {
      name: 'phone',
      title: 'Phone',
      description: 'Please prepend the number with the country code (ie. +45)',
      type: 'string',
    },
    {
      name: 'instagram',
      title: 'Instagram Username',
      description: `Without '@'`,
      type: 'string',
    },
    {
      name: 'facebook',
      title: 'Facebook Username',
      description: `Without '@'`,
      type: 'string',
    },
    {
      name: 'twitter',
      title: 'Twitter Username',
      description: `Without '@'`,
      type: 'string',
    },
    {
      name: 'youtube',
      title: 'YouTube Username',
      description: `Without '@'`,
      type: 'string',
    },
    {
      name: 'spotifyArtistID',
      title: 'Spotify Artist ID',
      description: `This is how you find the '<ID>': https://open.spotify.com/artist/<ID>?si=-sOmEranDOm-StriNg`,
      type: 'string',
    },
  ],
};
