// create current date time
var currentDayElement = document.getElementById('currentDay');

var now = moment();
const date = now.format('dddd, MMMM Do YYYY');
const time = now.format('h:mm a');

currentDayElement.innerText = time + ' on ' +  date;

// create time slots

var timeSlotsElement = document.getElementById('timeSlots');
var currentHour = new Date().getHours() % 12;

for  (var i = 0; i < 9; i++) {
    const timeSlot = document.createElement('p');
    timeSlotsElement.appendChild(timeSlot);
}