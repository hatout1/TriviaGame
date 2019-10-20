$(document).ready(function () {
    // starting function

    var CorrectAnswers = 0;
    var IncorrectAnswers = 0;
    var Unanswered = 0;
    let inputBox = $('input');
    // set this var on global to function for both cases (count down and submit button click)
    var timeleft = 10;

    if (timeleft < 0) {
        // grabAndCompare();
        // myFunction2();
        console.log('time')

    }
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
            if (timeleft > 0) {
                return;
            } else {

                clearInterval(progress);
                $(".btn2").next().toggle();
                $(".btn2").remove(".btn2");
                var V = document.getElementById("form");
                if ((V.style.display === "none") && (timeleft >= 0)) {
                    V.style.display = "block";
                } else {
                    V.style.display = "none"; x
                }
            }

        }, 1000);
    });

    // let inputBox = $('input');

    // function to remove questions and timer, then to show result layout.
    $('.btn2').click(function myFunction2() {
        // on click this function will stop the timer by setting it to "0"
        timeleft === 0;
        //then will show results lay out after removing questioins and timer.       
        $(this).next().toggle();
        $(this).remove(".btn2");
        var V = document.getElementById("form");

        if (V.style.display === "none") {
            V.style.display = "block";
        } else {
            V.style.display = "none";
        }

        grabAndCompare();

    });

    function grabAndCompare() {

        $(document).on('click', inputBox, function () {

            if ($("input:radio[name ='question1']:checked").val() === 'Alabama') {
                CorrectAnswers++;
            } else if ($("input:radio[name ='question1']:checked").val() === (('Mississippi') || ('Wyoming') || ('NorthDakota'))) {
                IncorrectAnswers++;
            } else {
                Unanswered++;
            }
        });

        $(document).on('click', inputBox, function () {

            if ($("input:radio[name ='question2']:checked").val() === 'Alaska') {
                CorrectAnswers++;
            } else if ($("input:radio[name ='question2']:checked").val() === (('Missouri') || ('Vermont') || ('Kentucky'))) {
                IncorrectAnswers++;
            } else {
                Unanswered++;
            }
        });

        $(document).on('click', inputBox, function () {

            if ($("input:radio[name ='question3']:checked").val() === 'Arizona') {
                CorrectAnswers++;
            } else if ($("input:radio[name ='question3']:checked").val() === (('NewMexico') || ('ArizonaTexas') || ('Ohio'))) {
                IncorrectAnswers++;
            } else {
                Unanswered++;
            }
        });

        $(document).on('click', inputBox, function () {

            if ($("input:radio[name ='question4']:checked").val() === 'Arkansas') {
                CorrectAnswers++;
            } else if ($("input:radio[name ='question4']:checked").val() === (('Iowa') || ('NorthDakota') || ('Idaho'))) {
                IncorrectAnswers++;
            } else {
                Unanswered++;
            }
        });

        $(document).on('click', inputBox, function () {

            if ($("input:radio[name ='question5']:checked").val() === 'California') {
                CorrectAnswers++;
            } else if ($("input:radio[name ='question5']:checked").val() === (('Virginia') || ('Washington') || ('SouthCarolina'))) {
                IncorrectAnswers++;
            } else {
                Unanswered++;
            }
        });

        $(document).on('click', inputBox, function () {

            if ($("input:radio[name ='question6']:checked").val() === 'Colorado') {
                CorrectAnswers++;
            } else if ($("input:radio[name ='question6']:checked").val() === (('Delaware') || ('Oklahoma') || ('Utah'))) {
                IncorrectAnswers++;
            } else {
                Unanswered++;
            }
        });

        $(document).on('click', inputBox, function () {

            if ($("input:radio[name ='question7']:checked").val() === 'Connecticut') {
                CorrectAnswers++;
            } else if ($("input:radio[name ='question7']:checked").val() === (('NewHampshire') || ('Maine') || ('Vermont'))) {
                IncorrectAnswers++;
            } else {
                Unanswered++;
            }
        });

        $(document).on('click', inputBox, function () {

            if ($("input:radio[name ='question8']:checked").val() === 'Delaware') {
                CorrectAnswers++;
            } else if ($("input:radio[name ='question8']:checked").val() === (('Wisconsin') || ('SouthDakota') || ('RhodeIsland'))) {
                IncorrectAnswers++;
            } else {
                Unanswered++;
            }
        });

        $(document).on('click', inputBox, function () {

            if ($("input:radio[name ='question9']:checked").val() === 'Florida') {
                CorrectAnswers++;
            } else if ($("input:radio[name ='question9']:checked").val() === (('Alabama') || ('Georgia') || ('Mississippi'))) {
                IncorrectAnswers++;
            } else {
                Unanswered++;
            }
        });

        $(document).on('click', inputBox, function () {

            if ($("input:radio[name ='question10']:checked").val() === 'Georgia') {
                CorrectAnswers++;
            } else if ($("input:radio[name ='question10']:checked").val() === (('WestVirginia') || ('Virginia') || ('SouthCarolina'))) {
                IncorrectAnswers++;
            } else {
                Unanswered++;
            }
            $('#win').html(CorrectAnswers)
            $('#loss').html(IncorrectAnswers)
            $('#left').html(Unanswered)

        });

    };
})

















