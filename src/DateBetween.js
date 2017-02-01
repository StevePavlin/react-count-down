let DateBetween = function(startDate, endDate, options) {
  let second = 1000;
  let minute = second * 60;
  let hour = minute * 60;
  let day = hour * 24;
  let distance = endDate - startDate;

  if (distance < 0) {
    return options.expiredText;
  }

  let days = Math.floor(distance / day);
  let hours = Math.floor((distance % day) / hour);
  let minutes = Math.floor((distance % hour) / minute);
  let seconds = Math.floor((distance % minute) / second);

  hours = hours < 10 ? `0${hours}` : hours;
  minutes = minutes < 10 ? `0${minutes}` : minutes;
  seconds = seconds < 10 ? `0${seconds}` : seconds;

  let between = "";
  if (options.days) {
    between += days;
    between += ':';
  }

  if (options.hours) {
    between += hours;
    between += ':';
  }

  if (options.minutes) {
    between += minutes;
    between += ':';
  }

  if (options.seconds) {
    between += seconds;
  }



  return between;
};

module.exports = DateBetween;
