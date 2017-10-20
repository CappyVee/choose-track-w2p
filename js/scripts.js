$(document).ready(function(){
  $("#trackform").submit(function(event){
    event.preventDefault();
    //record variables
    var q1 = parseInt($("select#question1").val());
    var q2 = parseInt($("select#question2").val());
    var q3 = parseInt($("select#question3").val());
    var q4 = parseInt($("select#question4").val());
    var q5 = parseInt($("select#question5").val());
    var q6 = parseInt($("select#question6").val());
    //logic
    if (q1 === 2 && q3 === 2 && q5 === 2) {
      $("#track-csharp").show();
    } else if (q1 === 2 && q2 === 1 && q4 === 2) {
      $("#track-java").show();
    } else if (q2 === 2 && q4 === 2 && q5 === 2) {
      $("#track-php").show();
    } else if (q3 === 1 && q4 === 1 && q5 === 2) {
      $("#track-ruby").show();
    } else if (q2 === 2 && q4 === 1 && q5 === 2) {
      $("#track-css").show();
    } else {
      $("#track-hunter").show();
    }
  });//submit function
});//doc ready function
