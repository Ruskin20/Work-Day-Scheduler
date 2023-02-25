
$(function () {
    displayTime();
    addTimeClasses();
    showSavedTasks()
});

var timeNow = dayjs().hour();
function addTimeClasses() {
    for (var hour = 9; hour < 18; hour++) {
        var timeBlock = $(`#hour-${hour}`)
        timeBlock.removeClass("past present future")
        if (hour === timeNow) {
            timeBlock.addClass('present')

        } else if (hour < timeNow) {
            timeBlock.addClass("past")

        } else if (hour > timeNow) {
            timeBlock.addClass("future")

        }

    }
}



// event listener for when save button is clicked
var saveBtn = $('.saveBtn');

saveBtn.on('click', function () {
    var textArea = $(this).siblings("textarea");
    var value = textArea.val();
    var key = `hour-${textArea.data("hour")}`;

    localStorage.setItem(key, value);

    showSavedTasks()
});

function showSavedTasks() {
    for (var hour = 9; hour < 18; hour++) {
        var key = `hour-${hour}`
        var textArea = $(`#${key} textarea`);

        var savedTask = localStorage.getItem(key) || "";
        textArea.val(savedTask)
    }

}

// Handles displaying the current day
var timeDisplayEl = $('#currentDay');
function displayTime() {
    var rightNow = dayjs().format('dddd, MMM DD, YYYY hh:mm ');
    timeDisplayEl.text(rightNow);
}


// Wrap all code that interacts with the DOM in a call to jQuery to ensure that
// the code isn't run until the browser has finished rendering all the elements
// in the html.




// TODO: Add a listener for click events on the save button. This code should
    // use the id in the containing time-block as a key to save the user input in
    // local storage. HINT: What does `this` reference in the click listener
    // function? How can DOM traversal be used to get the "hour-x" id of the
    // time-block containing the button that was clicked? How might the id be
    // useful when saving the description in local storage?
    //
    // TODO: Add code to apply the past, present, or future class to each time
    // block by comparing the id to the current hour. HINTS: How can the id
    // attribute of each time-block be used to conditionally add or remove the
    // past, present, and future classes? How can Day.js be used to get the
    // current hour in 24-hour time?
    //
    // TODO: Add code to get any user input that was saved in localStorage and set
    // the values of the corresponding textarea elements. HINT: How can the id
    // attribute of each time-block be used to do this?
    //
    // TODO: Add code to display the current date in the header of the page.