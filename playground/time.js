const moment = require('moment');

// const date = moment();
// date.add(1000, 'year').subtract(9, 'months');
// console.log(date.format('MMM Do YYYY'));

const someTimestamp = moment().valueOf();
console.log(someTimestamp);

// 6:01 am
const createdAt = 1234;
const date = moment(createdAt);
console.log(date.format('h:mm a'));

