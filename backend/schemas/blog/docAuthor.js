import { MdAccountCircle } from 'react-icons/md';
import { replaceSpecialChars } from '../../../frontend/src/utils/replaceSpecialCharsUtil';

export default {
  name: 'Author',
  title: 'Author',
  type: 'document',
  icon: MdAccountCircle,
  fields: [
    {
      name: 'title',
      title: 'Name',
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
      name: 'bio',
      title: 'Bio',
      type: 'array',
      of: [
        {
          title: 'Block',
          type: 'block',
          styles: [{ title: 'Normal', value: 'normal' }],
          lists: [],
        },
      ],
    },
  ],
  preview: {
    select: {
      title: 'title',
      media: 'image',
    },
  },
};
