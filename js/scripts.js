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
    if (q1 === 2 && q2 === 2 && q3 === 2) {
      $("#track-css").hide();
      $("#track-react").hide();
      $("#track-php").hide();
      $("#track-java").hide();
      $("#track-ruby").hide();
      $("#track-csharp").show();
    } else if (q1 === 2 && q2 === 1) {
      $("#track-css").hide();
      $("#track-react").hide();
      $("#track-php").hide();
      $("#track-csharp").hide();
      $("#track-ruby").hide();
      $("#track-java").show();
    } else if (q4 === 2 && q5 === 2) {
      $("#track-css").hide();
      $("#track-react").hide();
      $("#track-csharp").hide();
      $("#track-java").hide();
      $("#track-ruby").hide();
      $("#track-php").show();
    } else if (q3 === 1 && q4 === 1) {
      $("#track-css").hide();
      $("#track-react").hide();
      $("#track-php").hide();
      $("#track-csharp").hide();
      $("#track-java").hide();
      $("#track-ruby").show();
    } else if (q4 === 1 && q5 === 2) {
      $("#track-react").hide();
      $("#track-php").hide();
      $("#track-csharp").hide();
      $("#track-java").hide();
      $("#track-ruby").hide();
      $("#track-css").show();
    } else {
      $("#track-css").hide();
      $("#track-php").hide();
      $("#track-csharp").hide();
      $("#track-java").hide();
      $("#track-ruby").hide();
      $("#track-react").show();
    }
  });//submit function
});//doc ready function
