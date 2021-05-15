export default {
  name: 'ImageUnsplash',
  title: 'Unsplash',
  type: 'object',
  fields: [
    {
      name: 'url',
      title: 'Image from Unsplash',
      description: `Use in combination with 'Use image from Unsplash' to override an upload and point to the URL you specify here.`,
      type: 'string',
      validation: Rule =>
        Rule.custom(name => {
          if (typeof name === 'undefined') {
            return true; // Allow undefined values
          }
          // This would crash if we didn't check for undefined values first
          return !name.match(/^https:\/\/images\.unsplash\.com\/.*/g)
            ? `The string must be a valid 'Unsplash' image URL!`
            : true;
        }).error(),
    },
    {
      name: 'useImageFromUnsplash',
      title: 'Use image from Unsplash',
      description: `Use in combination with 'Image from Unsplash' to override an upload and point to the URL you specify there.`,
      type: 'boolean',
    },
    {
      name: 'altText',
      title: `Alt`,
      description: `Alternative text for image.`,
      type: 'string',
    },
    {
      name: 'onwersName',
      title: `Unsplash image owner's name`,
      description: `Full name of image's owner.`,
      type: 'string',
    },
    {
      name: 'profileUnsplash',
      title: `Unsplash profile of image's owner`,
      description: `Must start with a '@' after the domain, and have at least one character after that.`,
      type: 'string',
      validation: Rule =>
        Rule.custom(name => {
          if (typeof name === 'undefined') {
            return true; // Allow undefined values
          }
          // This would crash if we didn't check for undefined values first
          return !name.match(/^https:\/\/unsplash\.com\/@.{1,}/g)
            ? `The string must be a valid 'Unsplash' profile URL!`
            : true;
        }).error(),
    },
    {
      name: 'profileInstagram',
      title: `Instagram profile of image's owner`,
      description: `Must have at least one character after the domain.`,
      type: 'string',
      validation: Rule =>
        Rule.custom(name => {
          if (typeof name === 'undefined') {
            return true; // Allow undefined values
          }
          // This would crash if we didn't check for undefined values first
          return !name.match(/^https:\/\/instagram\.com\/.{1,}/g)
            ? `The string must be a valid 'Instagram' URL!`
            : true;
        }).error(),
    },
  ],
};
