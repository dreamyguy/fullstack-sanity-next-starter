import { MdCode } from 'react-icons/md';

export default {
  name: 'Project',
  title: 'Project',
  type: 'document',
  icon: MdCode,
  fields: [
    {
      name: 'title',
      title: 'Name',
      description: `The name for your project.`,
      type: 'string',
    },
    {
      name: 'slug',
      title: 'URL slug',
      description: `The URL-friendly title that match the name as spelled on GitHub / NPM / Gitlab`,
      type: 'string',
      validation: Rule =>
        Rule.custom(name => {
          if (typeof name === 'undefined') {
            return true; // Allow undefined values
          }
          // This would crash if we didn't check for undefined values first
          return !name.match(/^[a-zA-Z0-9_-]*$/g) ? 'The string must be URL-friendly!' : true;
        }).error(),
    },
    {
      name: 'isGithub',
      title: 'GitHub repository',
      description: `Is it a GitHub repository? If yes, leave it marked as 'true', if not mark as 'false'.`,
      type: 'boolean',
    },
    {
      name: 'GitHubUser',
      title: 'GitHub User',
      description: `The 'username' the project is under, on GitHub`,
      type: 'reference',
      to: { type: 'GitHubUsername' },
    },
    {
      name: 'urlSource',
      title: 'URL Source',
      description: `The URL that points to the project's source (i.e. 'GitHub Repository').`,
      type: 'string',
    },
    {
      name: 'urlPreview',
      title: 'URL Preview',
      description: `The URL that points to the project's preview (i.e. 'GitHub Page').`,
      type: 'string',
    },
    {
      name: 'urlDistribution',
      title: 'URL Distribution',
      description: `The URL that points to the project's distribution (i.e. 'NPM').`,
      type: 'string',
    },
    {
      name: 'screenshot',
      title: 'Screenshot',
      description: `A screenshot taken from the project.`,
      type: 'image',
    },
    {
      name: 'imageSoMe',
      title: 'Image Social Media',
      description: `Image used for SoMe preview.`,
      type: 'image',
    },
  ],
  initialValue: {
    // This is marked as true as I intend to use it as a showcase of open-source repos on GitHub.
    isGithub: true,
  },
  preview: {
    select: {
      title: 'title',
    },
    prepare({ title = 'New: Development > Project' }) {
      return {
        title: title || 'No title',
      };
    },
  },
};
