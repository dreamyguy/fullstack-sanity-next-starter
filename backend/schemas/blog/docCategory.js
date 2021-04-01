import { MdFormatListBulleted } from 'react-icons/md';

export default {
  name: 'category',
  title: 'Category',
  type: 'document',
  icon: MdFormatListBulleted,
  fields: [
    {
      name: 'title',
      title: 'Title',
      type: 'string',
    },
    {
      name: 'description',
      title: 'Description',
      type: 'text',
    },
  ],
  preview: {
    select: {
      title: 'title',
    },
    prepare({ title = 'New: Blog > Category' }) {
      return {
        title: title || 'No title',
      };
    },
  },
};
