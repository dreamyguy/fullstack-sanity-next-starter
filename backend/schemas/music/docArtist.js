import { MdAccountCircle } from 'react-icons/md';
import { replaceSpecialChars } from '../../../frontend/src/utils/replaceSpecialCharsUtil';

export default {
  name: 'Artist',
  title: 'Artist',
  type: 'document',
  icon: MdAccountCircle,
  fields: [
    {
      name: 'title',
      title: 'Title',
      description: `The artist's name`,
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
      name: 'slogan',
      title: 'Slogan',
      type: 'string',
    },
    {
      name: 'shortDescription',
      title: 'Short description',
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
      name: 'bio',
      title: 'Bio',
      type: 'array',
      of: [{ type: 'block' }],
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
      name: 'contactInfo',
      title: 'Contact Info & Social Tags',
      type: 'Contact',
    },
    {
      name: 'artistURLs',
      title: 'Artist URLs',
      type: 'ArtistURLs',
    },
  ],
  preview: {
    select: {
      title: 'title',
    },
    prepare({ title = 'New: Music > Artist' }) {
      return {
        title: title || 'No title',
      };
    },
  },
};
