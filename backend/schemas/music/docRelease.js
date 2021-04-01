// This represents regions, not necessarily entities that have a somewhat fixed, physical extension.
//
// Properties
// - title

import { MdLibraryMusic } from 'react-icons/md';

export default {
  name: 'Release',
  title: 'Release',
  type: 'document',
  icon: MdLibraryMusic,
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
        slugify: input => input.toLowerCase().replace(/\s+/g, '-').slice(0, 200),
      },
    },
    {
      name: 'shortDescription',
      title: 'Short description',
      type: 'text',
    },
    {
      name: 'description',
      title: 'Description',
      type: 'array',
      of: [{ type: 'block' }],
    },
    {
      name: 'albumArt',
      title: 'Album Art',
      type: 'image',
    },
    {
      name: 'releaseGenre',
      title: 'Genre for release',
      description: `The 'genre' related to the release`,
      type: 'reference',
      to: { type: 'Genre' },
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
