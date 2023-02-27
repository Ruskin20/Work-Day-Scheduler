
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
    var rightNow = dayjs().format('dddd, MMM D, YYYY hh:mm ');
    timeDisplayEl.text(rightNow);
}

