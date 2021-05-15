import { MdStar } from 'react-icons/md';
import { replaceSpecialChars } from '../../../frontend/src/utils/replaceSpecialCharsUtil';

export default {
  name: 'Portfolio',
  title: 'Portfolio',
  type: 'document',
  icon: MdStar,
  fields: [
    {
      name: 'title',
      title: 'Title',
      description: `The name for your portfolio project`,
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
      name: 'isLive',
      title: 'Live status',
      description: `Is the URL still live? If yes, leave it marked as 'true'. If it's no longer live, mark as 'false'.`,
      type: 'boolean',
    },
    {
      name: 'url',
      title: 'URL',
      description: `The URL that points to the website / project.`,
      type: 'string',
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
  ],
  initialValue: {
    // This is marked as true as most featured projects are still live, but some may not be.
    isLive: true,
  },
  preview: {
    select: {
      title: 'title',
    },
    prepare({ title = 'New: Portfolio' }) {
      return {
        title: title || 'No title',
      };
    },
  },
};
