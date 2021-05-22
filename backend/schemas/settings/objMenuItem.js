export default {
  name: 'MenuItem',
  title: 'MenuItem',
  type: 'object',
  fields: [
    {
      name: 'title',
      title: 'Title',
      type: 'string',
    },
    {
      name: 'path',
      title: 'Path / URL',
      type: 'string',
      validation: Rule =>
        Rule.custom(name => {
          if (typeof name === 'undefined') {
            return true; // Allow undefined values, because this is not required
          }
          // This would crash if we didn't check for undefined values first
          // eslint-disable-next-line no-useless-escape
          return !name.match(/^[/a-zA-Z0-9_-]*$/g) ? 'The string must be URL-friendly!' : true;
        }).error(),
    },
    {
      name: 'active',
      title: 'Active Status',
      type: 'boolean',
    },
  ],
};
