import sortArrayByKey from './sortArrayByKeyUtil';
import {
  usersUnsorted,
  usersSortedByFirstNameAsc,
  usersSortedByFirstNameDesc,
  usersSortedByLastNameAsc,
  usersSortedByLastNameDesc,
} from './sortArrayByKeyUtil.mock';

describe('sortArrayByKey', () => {
  it(`sort array of objects by 'firstName' key, ascending`, () => {
    const testInput = sortArrayByKey(usersUnsorted, 'firstName', 'asc');
    const testOutput = usersSortedByFirstNameAsc;
    expect(testInput).toEqual(testOutput);
  });
  it(`sort array of objects by 'firstName' key, descending`, () => {
    const testInput = sortArrayByKey(usersUnsorted, 'firstName', 'asc');
    const testOutput = usersSortedByFirstNameDesc;
    expect(testInput).toEqual(testOutput);
  });
  it(`sort array of objects by 'lastName' key, ascending`, () => {
    const testInput = sortArrayByKey(usersUnsorted, 'lastName', 'asc');
    const testOutput = usersSortedByLastNameAsc;
    expect(testInput).toEqual(testOutput);
  });
  it(`sort array of objects by 'lastName' key, descending`, () => {
    const testInput = sortArrayByKey(usersUnsorted, 'lastName', 'asc');
    const testOutput = usersSortedByLastNameDesc;
    expect(testInput).toEqual(testOutput);
  });
});
