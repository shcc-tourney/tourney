const dashedRightArrow = '⇢';
const outlineRightArrow = '⇨';


// returns a string like 'Apr 13 - Apr 14 2018'
// or 'Fri Apr 13 - Sat Apr 14 2018'
export function formatDateRange(start, end, includeDay = false) {
  let s1 = start.toDateString();
  if (!includeDay) s1 = s1.substring(4);
  s1 = s1.substring(0, s1.length - 4);
  let s2 = end.toDateString();
  if (!includeDay) s2 = s2.substring(4);
  return `${s1} ${dashedRightArrow} ${s2}`;
}