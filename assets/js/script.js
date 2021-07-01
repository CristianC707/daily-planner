// Function that runs the whole page
$(document).ready(function () {
    // Made button to store  time and value to local storage
    $(".saveBtn").on("click", function () {
        var value = $(this).siblings(".description").val();
        console.log(value);
        var time = $(this).parent().attr("id");
        console.log(time);
        localStorage.setItem(time, value);
    })
    // fetches current hour
    function getCurrentHour () {
        var hour = moment().hours();
        console.log(hour);

        $(".time-block").each(function(){
            var timeBlock = parseInt ($(this).attr('id').split('-')[1]);
            console.log(timeBlock);
            // if hour has past, shows as grey
            if (timeBlock < hour) {
                $(this).addClass("past");
            } 
            // if on current hour, shows up as red
            else if (timeBlock === hour){
                $(this).removeClass("past");
                $(this).addClass("present");
            }
            else {
                // shows up as green for all future times
                $(this).removeClass("past");
                $(this).removeClass("present");
                $(this).addClass("future");
            }
        })
    }
    getCurrentHour();
    // pulls from local storage
    $("#hour-9 .description").val(localStorage.getItem("hour-9"));
    $("#hour-10 .description").val(localStorage.getItem("hour-10"));
    $("#hour-11 .description").val(localStorage.getItem("hour-11"));
    $("#hour-12 .description").val(localStorage.getItem("hour-12"));
    $("#hour-13 .description").val(localStorage.getItem("hour-13"));
    $("#hour-14 .description").val(localStorage.getItem("hour-14"));
    $("#hour-15 .description").val(localStorage.getItem("hour-15"));
    $("#hour-16 .description").val(localStorage.getItem("hour-16"));
    $("#hour-17 .description").val(localStorage.getItem("hour-17"));
    $("#hour-18 .description").val(localStorage.getItem("hour-18"));
    
// Shows current day
function date (){
var ecurrentDay = document.getElementById("currentDay");
   var nowMoment = moment().format("dddd, MMMM Do");
   ecurrentDay.innerHTML = nowMoment;
}
date();

})