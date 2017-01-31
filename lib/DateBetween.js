"use strict";

var DateBetween = function DateBetween(startDate, endDate, options) {
  var second = 1000;
  var minute = second * 60;
  var hour = minute * 60;
  var day = hour * 24;
  var distance = endDate - startDate;

  if (distance < 0) {
    return "count down date expired";
  }

  var days = Math.floor(distance / day);
  var hours = Math.floor(distance % day / hour);
  var minutes = Math.floor(distance % hour / minute);
  var seconds = Math.floor(distance % minute / second);

  hours = hours < 10 ? "0" + hours : hours;
  minutes = minutes < 10 ? "0" + minutes : minutes;
  seconds = seconds < 10 ? "0" + seconds : seconds;

  var between = "";
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