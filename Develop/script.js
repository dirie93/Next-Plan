// Wrap all code that interacts with the DOM in a call to jQuery to ensure that
// the code isn't run until the browser has finished rendering all the elements
// in the html.
$(function () {
  // added an event listener that listens out for when button is 'clicked'
 $(".saveBtn").on("click", function() {
    var timeBlockId = $(this).parent().attr("id");  
    var userInput = $(this).siblings(".description").val(); // user input 
    localStorage.setItem(timeBlockId, userInput); // then the user input will be saved to local storage with the time block iD
    
  });