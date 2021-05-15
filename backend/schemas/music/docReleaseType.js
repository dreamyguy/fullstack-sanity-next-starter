import { MdMusicVideo } from 'react-icons/md';
import { replaceSpecialChars } from '../../../frontend/src/utils/replaceSpecialCharsUtil';

export default {
  name: 'ReleaseType',
  title: 'Release Type',
  type: 'document',
  icon: MdMusicVideo,
  fields: [
    {
      name: 'title',
      title: 'Title',
      type: 'string',
    },
    {
      name: 'slug',
      title: 'URL slug',
      description: `The URL-friendly title that's generated out of the 'title' field`,
      type: 'slug',
      options: {
        source: 'title',
        slugify: input =>
          replaceSpecialChars(input).toLowerCase().replace(/\s+/g, '-').slice(0, 200),
      },
    },
  ],
  preview: {
    select: {
      title: 'title',
    },
    prepare({ title = 'New: Music > Release' }) {
      return {
        title: title || 'No title',
      };
    },
  },
};
