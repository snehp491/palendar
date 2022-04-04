// create current date time
setTime();

// continue to update date time while user is on page
setInterval(() => {
    setTime();
}, 1000);

// create time slots

var timeSlotsElement = document.getElementById('timeSlots');
var currentHour = new Date().getHours();
var currentMinute = new Date().getMinutes();


// for each hour between 9 and 5 pm, create 
for  (var i = 9; i < 18; i++) {
    const timeSlot = document.createElement('div');
    timeSlot.className = 'row time-block d-flex justify-content-between';
    timeSlotsElement.appendChild(timeSlot);

    const hour = document.createElement('div');
    hour.className = 'hour';

    if (i < 12) {
        hour.innerHTML = i + ' AM';
    } else if (i === 12) {
        hour.innerHTML = i  + ' PM';
    } else {
        hour.innerHTML = i % 12 + ' PM';
    }

    const content = document.createElement('textarea');
    content.className = 'description';
    content.id = 'textarea-' + i;

    if (window.localStorage.getItem(i)) {
        content.value = window.localStorage.getItem(i);
    }

    if (i < currentHour) {
        content.className = 'description past flex-fill';
    } else if (currentHour === i) {
        content.className = 'description present flex-fill';
    } else {
        content.className = 'description future flex-fill';
    }

    const save = document.createElement('button');
    save.className = 'saveBtn';
    save.id = i;

    save.addEventListener('click', this.saveEvent);

    const fontAwesomeIcon = document.createElement('i');
    fontAwesomeIcon.className = 'fa fa-save';
    save.appendChild(fontAwesomeIcon);

    timeSlot.appendChild(hour);
    timeSlot.appendChild(content);
    timeSlot.appendChild(save);
}

// Update the current date time element when called
function setTime() {
    var currentDayElement = document.getElementById('currentDay');

    var now = moment();
    const date = now.format('dddd, MMMM Do YYYY');
    const time = now.format('h:mm a');

    currentDayElement.innerText = time + ' on ' +  date;

}

// save the item
function saveEvent(event) {
    const content = document.getElementById('textarea-' + event.currentTarget.id).value;

    window.localStorage.setItem(event.currentTarget.id, content);
}