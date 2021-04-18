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
      description: `Preferably '3000x3000', it will be resized programmatically for different uses.`,
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
      name: 'releaseURLs',
      title: 'Release URLs',
      description: 'Please provice the full URL',
      type: 'ReleaseURLs',
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
      description: 'A short description for the release (max. 160 chars), to be used on SoMe.',
      type: 'text',
      validation: Rule =>
        Rule.max(160).error(`'Short description' should have maximum 160 characters`),
    },
    {
      name: 'releaseDate',
      title: 'Release Date',
      description: `Release date`,
      type: 'date',
    },
    {
      name: 'releaseArticleDate',
      title: 'Release Article Date',
      description: `Release Article / Press Release's publishing date`,
      type: 'date',
    },
    {
      name: 'releaseArticleAuthor',
      title: 'Release Article Author',
      description: `Release Article / Press Release's author`,
      type: 'string',
    },
    {
      name: 'releaseArticleTitle',
      title: 'Release Article Title',
      description: `Release Article / Press Release's title (max. 160 chars)`,
      type: 'string',
      validation: Rule =>
        Rule.max(160).error(`'Release Article Title' should have maximum 160 characters`),
    },
    {
      name: 'releaseArticle',
      title: 'Release Article',
      type: 'array',
      of: [{ type: 'block' }],
    },
    {
      name: 'showInfluences',
      title: 'Show Influences',
      type: 'boolean',
    },
    {
      name: 'showContact',
      title: 'Show Contact',
      type: 'boolean',
    },
    {
      name: 'showOtherServices',
      title: 'Show Other Services',
      type: 'boolean',
    },
    {
      name: 'showBio',
      title: 'Show Bio',
      type: 'boolean',
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
