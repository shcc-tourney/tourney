export const dashedRightArrow = '⇢';
export const outlineRightArrow = '⇨';

// returns a string like 'Apr 13 -> Apr 14 2018'
// or 'Fri Apr 13 - Sat Apr 14 2018'
export function formatDateRange(start, end, includeDay = false) {
  let s1 = includeDay ? start.toDateString(start) : formatDateWithoutDay(start);
  s1 = s1.substring(0, s1.length - 4);
  let s2 = includeDay ? start.toDateString(end) : formatDateWithoutDay(end);
  return `${s1} ${dashedRightArrow} ${s2}`;
}

export function formatDateWithoutDay(date) {
  return date.toDateString().substring(4);
}