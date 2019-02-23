
  var config = {
    apiKey: "AIzaSyAQu_-TVUqBxDYv51bOpYlTOXb2wDLeffs",
    authDomain: "timesheet-e74e8.firebaseapp.com",
    databaseURL: "https://timesheet-e74e8.firebaseio.com",
    projectId: "timesheet-e74e8",
    storageBucket: "timesheet-e74e8.appspot.com",
    messagingSenderId: "402365801846"
  };
  firebase.initializeApp(config);

//on click to push data to table

var name;
var role;
var startDate;
var monthsWorked;
var rate;
var totalBilled;




$( "#" ).on( "click", function() {

    $("#btn2").click(function(){
        $("#employeeName").html(`<td>${name}</td>`);
      });
    
  });