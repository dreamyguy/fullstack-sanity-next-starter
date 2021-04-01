/* eslint-disable no-nested-ternary */

// Order array by key
// ------------------------------------------------------------
const sortArrayByKey = (array, key, ascdesc) =>
  array.sort((a, b) => {
    const x = a[key];
    const y = b[key];
    if (ascdesc === 'asc') {
      return x < y ? -1 : x > y ? 1 : 0;
    }
    if (ascdesc === 'desc') {
      return x > y ? -1 : x < y ? 1 : 0;
    }
    return null;
  });
// const impactDescending = sortArrayByKey(data, 'impact', 'desc');

export default sortArrayByKey;
