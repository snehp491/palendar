var currentDayElement = document.getElementById('currentDay');

var now = moment();
const date = now.format('dddd, MMMM Do YYYY');
const time = now.format('HH:mm:ss a');

currentDayElement.innerText = time + ' on ' +  date;