$(document).ready(function() {

function startPlay() {
    $('#score').hide();
    $('#incorrect').hide();
    $('#unanswered').hide();
    $('#reset').hide();
      
      var totalQuestions = 10;
      var correct = 0;
      var unanswered = 0;
      var incorrect;
      var final;
      var i;
      var validate = true;
      var un = [];

      final = document.getElementById("score");
      incorrect = document.getElementById("incorrect");
      noAnswer = document.getElementById("unanswered");

      function answers() {``
      var a1 = document.getElementsByName('q1');
        for(i = 0; i < a1.length; i++) {
          if (a1[i].checked) {
            if(a1[i].value == 'Janus') {
              correct++;
              break;
            }
          }
        }
      var a2 = document.getElementsByName('q2');
        for(i = 0; i < a2.length; i++) {
          if (a2[i].checked) {
            if(a2[i].value == 'Dionysus') {
              correct++;
              break;
            }
          }
        }
        var a3 = document.getElementsByName('q3');
        for(i = 0; i < a3.length; i++) {
          if (a3[i].checked) {
            if(a3[i].value == 'Zeus') {
              correct++;
              break;
            }
          }
        }
        var a4 = document.getElementsByName('q4');
        for(i = 0; i < a4.length; i++) {
          if (a4[i].checked) {
            if(a4[i].value == 'Hera') {
              correct++;
              break;
            }
          }
        }
        var a5 = document.getElementsByName('q5');
        for(i = 0; i < a5.length; i++) {
          if (a5[i].checked) {
            if(a5[i].value == 'Oceanus') {
              correct++;
              break;
            }
          }
        }
      var a6 = document.getElementsByName('q6');
        for(i = 0; i < a6.length; i++) {
          if (a6[i].checked) {
            if(a6[i].value == 'Cerberus') {
              correct++;
              break;
            }
          }
        }
      var a7 = document.getElementsByName('q7');
        for(i = 0; i < a7.length; i++) {
          if (a7[i].checked) {
            if(a7[i].value == 'Atlas') {
              correct++;
              break;
            }
          }
        }
      var a8 = document.getElementsByName('q8');
        for(i = 0; i < a8.length; i++) {
          if (a8[i].checked) {
            if(a8[i].value == 'Kronos') {
              correct++;
              break;
            }
          }
        }
      var a9 = document.getElementsByName('q9');
        for(i = 0; i < a9.length; i++) {
          if (a9[i].checked) {
            if(a9[i].value == 'Apollo') {
              correct++;
              break;
            }
          }
        }
      var a10 = document.getElementsByName('q10');
        for(i = 0; i < a10.length; i++) {
          if (a10[i].checked) {
            if(a10[i].value == 'Prometheus') {
              correct++;
              break;
            }
          }
        }


        if(correct == totalQuestions) {
          final.innerHTML = ("Congratulations! You got all of the questions correct!");
         
        } else {
          final.innerHTML = ("Correct: " + correct);
          check();
          incorrect.innerHTML = ("Incorrect: " + (totalQuestions - correct - unanswered));
          noAnswer.innerHTML = ("Unanswered: " + unanswered);
          console.log("next")
        }
      }

      var number = 60;
      function run() {
      counter = setInterval(decrement, 1000);
      }
    function decrement(){
      number--;
      $('#show-number').html('<h2>' + number + '<h2>')
      if (number === 0){
        stop();
        $('#trivia').hide();
        $('#show-number').hide();
        $('#score').show();
        $('#incorrect').show();
        $('#unanswered').show();
        $('#reset').show();
        console.log("okay")
        answers();
        check();
      }
    }

    function stop(){
            clearInterval(counter);
          }
      
    function check () {
      $('.option').each(function () {
        var question = $(this).prev().text();
        if (!$(this).find('input').is(':checked')) {
          un.push(question);
          unanswered++;
          validate = false;
          console.log("true1")
        }
      });
      if(un.length > 0) {
      console.log("weird");
      }
    return validate;
    };

  $('#submit').click(function(){

      $('#trivia').hide();
      $('#show-number').hide();
      $('#score').show();
      $('#incorrect').show();
      $('#unanswered').show();
      $('#reset').show();
      answers();
      check();
  

        if(correct == totalQuestions) {
          stop();
        } else {
          stop();
        }

});

    $('#trivia').hide();
    $('#show-number').hide();
    $('#unanswered').hide();
    $('#reset').hide();

    $('#start').click(function(){
    $('#start').hide()
    $('#start').on('click', run);

    run();

    $('#trivia').show();
    $('#submit').show();
    $('#show-number').show();

  });
}
  startPlay();

  $('#reset').click(function(){
    location.reload();
  });
});