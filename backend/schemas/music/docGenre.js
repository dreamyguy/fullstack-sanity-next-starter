// This represents categories that can be assigned to products
//
// Properties
// - title

import { MdQueueMusic } from 'react-icons/md';

export default {
  name: 'Genre',
  title: 'Genre',
  type: 'document',
  icon: MdQueueMusic,
  fields: [
    {
      name: 'title',
      title: 'Title',
      description: `The name for your genre (i.e. 'Progressive Rock', 'Rock')`,
      type: 'string',
    },
    {
      name: 'slug',
      title: 'URL slug',
      description: `The URL-friendly title that's generated out of the 'title' field`,
      type: 'slug',
      options: {
        source: 'title',
        slugify: input => input.toLowerCase().replace(/\s+/g, '-').slice(0, 200),
      },
    },
  ],
  preview: {
    select: {
      title: 'title',
    },
    prepare({ title = 'New: Music > Genre' }) {
      return {
        title: title || 'No title',
      };
    },
  },
};
