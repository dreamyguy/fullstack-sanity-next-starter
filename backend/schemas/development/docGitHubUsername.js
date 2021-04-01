// This represents categories that can be assigned to products
//
// Properties
// - title

import { MdMemory } from 'react-icons/md';

export default {
  name: 'GitHubUsername',
  title: 'GitHub Username',
  type: 'document',
  icon: MdMemory,
  fields: [
    {
      name: 'username',
      title: 'Username',
      description: `Your GitHub username (i.e. 'dreamyguy'). It will be used to connect to GitHub.`,
      type: 'string',
    },
  ],
  preview: {
    select: {
      title: 'username',
    },
    prepare({ title = 'New: Development > GitHub Username' }) {
      return {
        title: title || 'No title',
      };
    },
  },
};
