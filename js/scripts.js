$(document).ready(function(){
  $("#trackform").submit(function(event){
    event.preventDefault();
    var q1 = $("select#question1").val();
    var q2 = $("select#question2").val();
    var q3 = $("select#question3").val();
    var q4 = $("select#question4").val();
    var q5 = $("select#question5").val();
    var q6 = $("select#question6").val();
    alert(q1)
    alert(q2)
    alert(q3)
    alert(q4)
    alert(q5)
    alert(q6)
  });//submit function
});//doc ready function
