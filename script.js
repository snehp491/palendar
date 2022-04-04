// create time slots

var timeSlotsElement = $('#timeSlots');
var currentHour = new Date().getHours();
var currentMinute = new Date().getMinutes();

// for each hour between 9 and 5 pm, create 
for  (var i = 9; i < 18; i++) {
    // Create the time slot element
    const timeSlot = $('<div></div>');
    timeSlot.addClass('row time-block d-flex justify-content-between');
    
    // prepare the text to go inside of the time slot element
    let time = '';
    if (i < 12) {
        time = i + ' AM';
    } else if (i === 12) {
        time = i  + ' PM';
    } else {
        time = i % 12 + ' PM';
    }

    // add the time text and apply the proper class
    const hour = $('<div></div>').text(time).addClass('hour');
    
    // create the textarea element and add existing content to it
    const content = $('<textarea></textarea>').addClass('description');
    content.attr('id', 'textarea-' + i);

    if (window.localStorage.getItem(i)) {
        content.val(window.localStorage.getItem(i));
    }

    // create the save button with style, font awesome icon and event listener
    const save = $('<button></button>');
    save.addClass('saveBtn');
    save.attr('id', i);

    save.on('click', this.saveEvent);

    const fontAwesomeIcon = $('<i></i>');
    fontAwesomeIcon.addClass('fa fa-save');

    // append everything to the proepr parent element
    save.append(fontAwesomeIcon);

    timeSlot.append(hour);
    timeSlot.append(content);
    timeSlot.append(save);

    timeSlotsElement.append(timeSlot);

}

// create current date time
setTime();

// continue to update date time while user is on page
setInterval(() => {
    setTime();
}, 1000);

// Update the current date time element when called
function setTime() {
    var now = moment();
    const date = now.format('dddd, MMMM Do YYYY');
    const time = now.format('h:mm a');

    $('#currentDay').text(time + ' on ' + date);

    var currentHour = new Date().getHours();
    for  (var i = 9; i < 18; i++) {
        const content = $('#textarea-' + i);

        let className = '';
        if (i < currentHour) {
            className = 'description past flex-fill';
        } else if (currentHour === i) {
            className = 'description present flex-fill';
        } else {
            className = 'description future flex-fill';
        }    

        content.removeClass();
        content.addClass(className);
    }
}

// save the item
function saveEvent(event) {    
    window.localStorage.setItem(event.currentTarget.id, $('#textarea-' + event.currentTarget.id).val());
}