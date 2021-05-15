import { MdFlashOn } from 'react-icons/md';
import { replaceSpecialChars } from '../../../frontend/src/utils/replaceSpecialCharsUtil';

export default {
  name: 'post',
  title: 'Post',
  type: 'document',
  icon: MdFlashOn,
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
    {
      name: 'author',
      title: 'Author',
      type: 'reference',
      to: { type: 'Author' },
    },
    {
      name: 'imageUnsplash',
      title: 'Unsplash',
      type: 'ImageUnsplash',
    },
    {
      name: 'imageMain',
      title: 'Main image',
      type: 'image',
      options: {
        hotspot: true,
      },
    },
    {
      name: 'imageScreenshot',
      title: 'Screenshot',
      description: `A screenshot, if relevant.`,
      type: 'image',
      options: {
        hotspot: true,
      },
    },
    {
      name: 'imageSoMe',
      title: 'Image Social Media',
      description: `Image used for SoMe preview.`,
      type: 'image',
      options: {
        hotspot: true,
      },
    },
    {
      name: 'categories',
      title: 'Categories',
      type: 'array',
      of: [{ type: 'reference', to: { type: 'category' } }],
    },
    {
      name: 'publishedAt',
      title: 'Published at',
      type: 'datetime',
    },
    {
      name: 'shortDescription',
      title: 'Short description',
      type: 'text',
      validation: Rule =>
        Rule.max(160).error('Short description should have maximum 160 characters'),
    },
    {
      name: 'body',
      title: 'Body',
      type: 'blockContent',
    },
  ],
  preview: {
    select: {
      title: 'title',
      author: 'author.name',
      media: 'imageMain',
    },
    prepare(selection) {
      const { author, title = 'New: Blog > Post' } = selection;
      return { ...selection, title: title || 'No title', subtitle: author && `by ${author}` };
    },
  },
};
