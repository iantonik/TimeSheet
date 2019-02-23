


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




$("#submit").on( "click", function(event) {
event.preventDefault()

    name = $("#name").val().trim();
    role = $("#role").val().trim();
    Start Date = $("#start-date").val().trim();
    email = $("#email-input").val().trim();
    age = $("#age-input").val().trim();
    comment = $("#comment-input").val().trim();

<th id="months-worked">Months Worked</th>
<th id="rate">Monthy Rate</th>
<th id = "total-billed">Total Billed</th>