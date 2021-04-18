import { MdPersonPin } from 'react-icons/md';

export default {
  name: 'Influence',
  title: 'Influence',
  type: 'document',
  icon: MdPersonPin,
  fields: [
    {
      name: 'title',
      title: 'Title',
      description: `The name for the band or artist that's considered an influence (i.e. 'Camel', 'Focus', 'Yes')`,
      type: 'string',
    },
    {
      name: 'linkSpotify',
      title: 'Spotify Link',
      description: `The link to the artist on Spotify)`,
      type: 'string',
    },
    {
      name: 'linkWikipedia',
      title: 'Wikipedia Link',
      description: `The link to the artist on Wikipedia)`,
      type: 'string',
    },
    {
      name: 'linkProgArchives',
      title: 'ProgArchives Link',
      description: `The link to the artist on ProgArchives)`,
      type: 'string',
    },
  ],
  preview: {
    select: {
      title: 'title',
    },
    prepare({ title = 'New: Music > Influence' }) {
      return {
        title: title || 'No title',
      };
    },
  },
};
