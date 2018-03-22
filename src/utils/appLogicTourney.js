import { dateDiff, todayWithoutTime } from './utilities';

export function numDays(tourney) {
  if (!tourney) return 0;
  return dateDiff(tourney.startDate, tourney.endDate, 'days') + 1;
}

export function isPending(tourney) {
  if (!tourney) return false;
  return (dateDiff(todayWithoutTime(), tourney.endDate, 'days') >= 0);
}