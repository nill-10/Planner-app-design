$(document).ready(function () {
    $("#currentDay").text(dayjs().format("dddd, MMMM D, YYYY"));
  
    
    for (let hour= 9; hour <= 17; hour++) {
      let timeBlockDiv= $("<div>").addClass("row time-block");
  
    // hour div
      var hourDiv= $("<div>").addClass("col-1 hour").text(dayjs().hour(hour).format("hA"));
  
    //textarea
      var eventInput= $("<textarea>").addClass("col-10 description");
  
      if (dayjs().hour()<hour) {
        eventInput.addClass("future");
      } else if (dayjs().hour() > hour) {
        eventInput.addClass("past");
      } else {
        eventInput.addClass("present");
      }
  
    //save button
      var saveButton= $("<button>").addClass("col-1 saveBtn").html('<i class="fas fa-save"></i>');
  
      timeBlockDiv.append(hourDiv, eventInput, saveButton);
      $(".container").append(timeBlockDiv);
    }
  
  //Event listener
    $(".saveBtn").on("click", function () {
   
     var eventText= $(this).siblings(".description").val();
      var hour= parseInt($(this).siblings(".hour").text());

    });
  
    //Load events 
    for (let hour = 9; hour <= 17; hour++) {
        
      if (eventText) {
        $(`.hour:contains(${hour})`).siblings(".description").val(eventText);
      }
    }
  });