import { MdSettings } from 'react-icons/md';

export default {
  name: 'siteSettings',
  title: 'Site Settings',
  type: 'document',
  icon: MdSettings,
  liveEdit: false,
  __experimental_actions: [
    // 'create',
    'update',
    // 'delete',
    'publish',
  ],
  fields: [
    {
      name: 'title',
      title: 'Tittle',
      type: 'string',
      validation: Rule => [
        Rule.required().min(10).error('A title of min. 10 characters is required'),
        Rule.max(50).warning('Shorter titles are usually better'),
      ],
    },
    {
      name: 'shortDescription',
      title: 'Short Description',
      type: 'string',
      validation: Rule =>
        Rule.max(160).error('Short description should have maximum 160 characters'),
    },
    {
      name: 'description',
      title: 'Description',
      type: 'text',
    },
    {
      name: 'bioGeneric',
      title: 'Bio Generic',
      type: 'blockContent',
    },
    {
      name: 'bioDeveloper',
      title: 'Bio Developer',
      type: 'blockContent',
    },
    {
      name: 'bioMusician',
      title: 'Bio Musician',
      type: 'blockContent',
    },
    {
      name: 'mainMenu',
      title: 'Main menu',
      description: 'Define the links and their labels for the main menu at the header',
      type: 'Menu',
    },
    {
      name: 'animateNumbers',
      title: 'Animate Numbers',
      type: 'boolean',
    },
    {
      name: 'darkMode',
      title: 'Dark Mode',
      type: 'boolean',
    },
  ],
  initialValue: {
    title: 'Full-stack Sanity Next Starter',
    description: 'Because you can!',
    animateNumbers: true,
    darkMode: true,
  },
  preview: {
    select: {
      title: 'title',
    },
    prepare({ title = 'Site Settings' }) {
      return {
        title: title || 'Site Settings',
      };
    },
  },
};
