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
      name: 'artist',
      title: 'Artist',
      type: 'reference',
      to: { type: 'Artist' },
    },
    {
      name: 'recordLabel',
      title: 'Record Label',
      type: 'reference',
      to: { type: 'RecordLabel' },
    },
    {
      name: 'albumArt',
      title: 'Album Art',
      type: 'image',
    },
    {
      name: 'releaseType',
      title: 'Release Type',
      type: 'reference',
      to: { type: 'ReleaseType' },
    },
    {
      name: 'releaseGenre',
      title: 'Genre for release',
      description: `The 'genre' related to the release`,
      type: 'reference',
      to: { type: 'Genre' },
    },
    {
      name: 'Influences',
      title: 'Influences',
      description: `The bands that influenced this release`,
      type: 'array',
      of: [
        {
          type: 'reference',
          to: [{ type: 'Influence' }],
        },
      ],
    },
    {
      name: 'isrc',
      title: 'ISRC',
      type: 'string',
    },
    {
      name: 'upc',
      title: 'UPC',
      type: 'string',
    },
    {
      name: 'composer',
      title: 'Composer',
      type: 'string',
    },
    {
      name: 'performer',
      title: 'Performer',
      type: 'string',
    },
    {
      name: 'producer',
      title: 'Producer',
      type: 'string',
    },
    {
      name: 'mixer',
      title: 'Mixer',
      type: 'string',
    },
    {
      name: 'masterer',
      title: 'Masterer',
      type: 'string',
    },
    {
      name: 'slogan',
      title: 'Slogan',
      description: 'A short slogan for the release',
      type: 'string',
    },
    {
      name: 'shortDescription',
      title: 'Short description',
      description: 'A short description for the release',
      type: 'text',
      validation: Rule =>
        Rule.max(160).error('Short description should have maximum 160 characters'),
    },
    {
      name: 'description',
      title: 'Description',
      type: 'array',
      of: [{ type: 'block' }],
    },
    {
      name: 'article',
      title: 'Article',
      type: 'array',
      of: [{ type: 'block' }],
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
