var test = require('tape');
var DateBetween = require('../src/DateBetween.js');

var date1 = new Date("Fri Feb 06 2015 18:07:30");
var date2 = new Date("Fri Feb 07 2015 18:07:30");
var difference = DateBetween(date1,date2, {
    days: true,
    hours: true,
    minutes: true,
    seconds: true
});

test('difference between 2 dates is equal to 1 day', function (t) {
    t.equal(difference, "1:00:00:00");
    t.end();
});

var date3 = new Date("Fri Feb 06 2015 18:07:30");
var date4 = new Date("Fri Feb 06 2015 19:34:30");
var difference1 = DateBetween(date3,date4, {
    hours: true,
    minutes: true,
    seconds: true
});

test('difference between 2 dates is equal to 1 hour 27 minutes', function (t) {
    t.equal(difference1, "01:27:00");
    t.end();
});
