import { format, formatDuration, intervalToDuration, isValid, parseISO } from 'date-fns';

export const timeGapInHours = ({ start, end }) => {
  let output = 0;
  if (isValid(parseISO(start)) && isValid(parseISO(end))) {
    const interval = intervalToDuration({ start: parseISO(start), end: parseISO(end) });
    output = formatDuration(interval);
  }
  return output;
};
// console.log(timeGapInHours({ start: '2021-04-20T08:00:00.000Z', end: '2021-04-20T09:00:00.000Z' }));

export const dateToString = (date, formatting) =>
  isValid(date) ? format(date, formatting) : format(parseISO(date), formatting);
