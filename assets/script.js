
$(function () {
    displayTime();
    addTimeClasses();
    showSavedTasks()
});

// Handles displaying the current day
var timeDisplayEl = $('#currentDay');
function displayTime() {
    var rightNow = dayjs().format('dddd, MMM D, YYYY hh:mm A');
    timeDisplayEl.text(rightNow);
}

//  Get current hours
var timeNow = dayjs().hour();
function addTimeClasses() {
    //    Loop over time blocks and check current
    for (var hour = 9; hour < 18; hour++) {
        var timeBlock = $(`#hour-${hour}`)
        timeBlock.removeClass("past present future")
        // checks for time and if we have moved past this time
        if (hour === timeNow) {
            timeBlock.addClass("present")

        } else if (hour < timeNow) {
            timeBlock.addClass("past")

        } else if (hour > timeNow) {
            timeBlock.addClass("future")

        }

    }
}


var saveBtn = $('.saveBtn');

// event listener for when save button is clicked
saveBtn.on('click', function () {
    var textArea = $(this).siblings("textarea");
    var value = textArea.val();
    var key = `hour-${textArea.data("hour")}`;
    // Save in local storage
    localStorage.setItem(key, value);
    ;


    showSavedTasks()

});

// loads data saved in local storage and shows it in textarea
function showSavedTasks() {
    for (var hour = 9; hour < 18; hour++) {
        var key = `hour-${hour}`
        var textArea = $(`#${key} textarea`);

        var savedTask = localStorage.getItem(key) || "";
        textArea.val(savedTask)
    }

}