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
      name: 'blogPath',
      title: 'Blog Path',
      type: 'string',
      validation: Rule =>
        Rule.custom(name => {
          if (typeof name === 'undefined') {
            return true; // Allow undefined values, because this is not required
          }
          // This would crash if we didn't check for undefined values first
          return !name.match(/^[a-zA-Z0-9_-]*$/g) ? 'The string must be URL-friendly!' : true;
        }).error(),
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
