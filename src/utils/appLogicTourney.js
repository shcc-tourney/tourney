import { dateDiff, todayWithoutTime } from './utilities';

export function numDays(tourney) {
  return dateDiff(tourney.startDate, tourney.endDate, 'days') + 1;
}

export function isPending(tourney) {
  return (dateDiff(todayWithoutTime(), tourney.endDate, 'days') >= 0);
}