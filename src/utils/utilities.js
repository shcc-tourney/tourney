export const dashedRightArrow = '⇢';
export const outlineRightArrow = '⇨';

// returns a string like 'Apr 13 -> Apr 14 2018'
// or 'Fri Apr 13 - Sat Apr 14 2018'
export function formatDateRange(start, end, includeDay = false) {
  let s1 = includeDay ? start.toDateString() : formatDateWithoutDay(start);
  if (dateDiff(end, start, 'days') === 0) return s1;
  s1 = s1.substring(0, s1.length - 4);
  let s2 = includeDay ? end.toDateString() : formatDateWithoutDay(end);
  return `${s1} ${dashedRightArrow} ${s2}`;
}

export function formatDateWithoutDay(date) {
  return date.toDateString().substring(4);
}

export function dateDiff(startDate, endDate, interval) {
  let second = 1000, minute = second * 60, hour = minute * 60, day = hour * 24, week = day * 7;
  var timeDiff = endDate - startDate;
  if (isNaN(timeDiff)) return NaN;
  switch (interval) {
    case "years": return endDate.getFullYear() - startDate.getFullYear();
    case "months": return (
      (endDate.getFullYear() * 12 + endDate.getMonth())
      -
      (startDate.getFullYear() * 12 + startDate.getMonth())
    );
    case "weeks": return Math.floor(timeDiff / week);
    case "days": return Math.floor(timeDiff / day);
    case "hours": return Math.floor(timeDiff / hour);
    case "minutes": return Math.floor(timeDiff / minute);
    case "seconds": return Math.floor(timeDiff / second);
    default: return undefined;
  }
}

export function todayWithoutTime() {
  let dt = new Date();
  return new Date(dt.getFullYear(), dt.getMonth(), dt.getDate());
}