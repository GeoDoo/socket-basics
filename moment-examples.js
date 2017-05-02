var moment = require('moment');
var now = moment();

// console.log(now.format());
// console.log(now.format('X'));
// // console.log(now.format('x')); // milliseconds
// console.log(now.valueOf());

var timestamp = 1493701641301;
var timestampMoment = moment.utc(timestamp);
console.log(timestampMoment.format());

// now.subtract(1, 'year');
// console.log(now.format());

// console.log(now.format('MMM do YYYY, h:mma'));