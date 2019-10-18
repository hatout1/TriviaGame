$(document).ready(function () {
    // starting function

    // var CorrectAnswers = []
    // var IncorrectAnswers = []
    // var Unanswered = []

    // set this var on global to function for both cases (count down and submit button click)
    var timeleft = 3;

    // function to remove welcome text and start button.
    $('.btn1').click(function myFunction() {
        $(this).siblings(".item").toggle();
        $(this).remove(".btn1");
        var x = document.getElementById("wel");
        if (x.style.display === "none") {
            x.style.display = "block";
        } else {
            x.style.display = "none";
        }

        // after the above function the timer will automatically start!
        // timer function
        var progress = setInterval(function countDown() {
            // to show the count down on html page
            document.getElementById("timer1").innerHTML = timeleft-- + " Seconds left!!!";

            // if countdown = 0 move to next steep
            if (timeleft < 0) {

                clearInterval(progress);
                $(".btn2").next().toggle();
                $(".btn2").remove(".btn2");
                var V = document.getElementById("form");
                if ((V.style.display === "none") && (timeleft >= 0)) {
                    V.style.display = "block";
                } else {
                    V.style.display = "none";
                }

            }
        }, 1000);
    });

    // function to remove questions and timer, then to show result layout.
    $('.btn2').click(function myFunction2() {
        // on click this function will stop the timer by setting it to "0"
        timeleft = 0;
        //then will show results lay out after removing questioins and timer.       
        $(this).next().toggle();
        $(this).remove(".btn2");
        var V = document.getElementById("form");

        if (V.style.display === "none") {
            V.style.display = "block";
        } else {
            V.style.display = "none";
        }

    })

})

















