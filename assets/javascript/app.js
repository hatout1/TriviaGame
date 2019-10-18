$(document).ready(function () {
    // starting function

    // var CorrectAnswers = []
    // var IncorrectAnswers = []
    // var Unanswered = []


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
    });

    // function to removequestions and timer then show result layout.
    $('.btn2').click(function myFunction2() {
        // console.log("it is working");
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















