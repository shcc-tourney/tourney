module.exports = {
  dateDiff,
  todayWithoutTime
};

function dateDiff(startDate, endDate, interval) {
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

function todayWithoutTime() {
  let dt = new Date();
  return new Date(dt.getFullYear(), dt.getMonth(), dt.getDate());
}