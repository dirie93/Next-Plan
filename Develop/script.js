// Wrap all code that interacts with the DOM in a call to jQuery to ensure that
// the code isn't run until the browser has finished rendering all the elements
// in the html.
$(function () {
  // added an event listener that listens out for when button is 'clicked'
  $(".saveBtn").on("click", function () {
    var timeBlockId = $(this).parent().attr("id");
    var userInput = $(this).siblings(".description").val(); // user input
    localStorage.setItem(timeBlockId, userInput); // then the user input will be saved to local storage with the time block iD
  });

  var presentHour = new Date().getHours();

  $(".time-block").each(function () {
    var timeBlockHour = parseInt($(this).attr("id").split("-")[1]); // retrieve the hour from the time block ID

    // this if-else code block determines what time block it is if a condition is met
    if (timeBlockHour < presentHour) {
      // condition: if  time block hour is < than the present hour, it is in the past
      $(this).addClass("past");
    } else if (timeBlockHour === presentHour) {
      // condition: if  time block hour is = to  present hour, it is the present

      $(this).addClass("present");
    } else {
      // condition: if  time block hour is > than the present hour, it is in the future

      $(this).addClass("future");
    }

    var storedInput = localStorage.getItem($(this).attr("id")); // Retrieves stored input from local storage based on the time block ID
    if (storedInput) {
      $(this).find(".description").val(storedInput);
    }
  });
});
