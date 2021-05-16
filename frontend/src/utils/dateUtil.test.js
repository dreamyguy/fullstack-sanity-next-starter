/* eslint-disable */
import { timeGapInHours } from './dateUtil';

describe('dateUril', () => {
  describe('timeGapInHours', () => {
    it(`should return expected output '1 hour'`, () => {
      const testInput = timeGapInHours({
        start: '2021-04-20T08:00:00.000Z',
        end: '2021-04-20T09:00:00.000Z',
      });
      const testOutput = '1 hour';
      expect(testInput).toEqual(testOutput);
    });
  });
});
