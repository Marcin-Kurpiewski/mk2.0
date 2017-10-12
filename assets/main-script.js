// $(window).on("load", function(){
//     $(".preloader").fadeOut(500);
// });
//
//
$(document).ready(function () {

    $(".burger__btn").click(function () {
        event.preventDefault();
        if ($("nav").hasClass('close-nav')) {
            $("nav").removeClass("close-nav");
            $("nav").addClass("open-nav");
        }
        else {
            $("nav").removeClass("open-nav");
            $("nav").addClass("close-nav");
        }
    });

    $('.nav-item').click(
        function(event){
            event.preventDefault();
            $('html, body').animate({
                scrollTop: $($.attr(this, 'href')).offset().top -90
            }, 800)});
});


// var svg = new Walkway({
//     selector: '#test',
//     duration: '3000',
//     // can pass in a function or a string like 'easeOutQuint'
//     easing: function (t) {
//         return t * t;
//     }
// });


