$(document).ready(function () {
    // starting function

    // var CorrectAnswers = []
    // var IncorrectAnswers = []
    // var Unanswered = []



    $('.btn1').click(function () {
        $(this).siblings(".item").toggle();
        $(this).remove(".btn1").toggle();


    });
    $('.btn1').click(function myFunction() {


        var x = document.getElementById("wel");
        if (x.style.display === "none") {
            x.style.display = "block";
        } else {
            x.style.display = "none";
        }


    });

})















