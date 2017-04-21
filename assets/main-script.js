
// $(window).on("load", function(){
//     $(".preloader").fadeOut(500);
// });
//
//
$(document).ready(function () {

    $(".burger__btn").click(function () {
        event.preventDefault();
        if($("nav").hasClass('close-nav')){
            $("nav").removeClass("close-nav");
            $("nav").addClass("open-nav");
        }
        else{
            $("nav").removeClass("open-nav");
            $("nav").addClass("close-nav");
        }
    });

});


// var svg = new Walkway({
//     selector: '#test',
//     duration: '3000',
//     // can pass in a function or a string like 'easeOutQuint'
//     easing: function (t) {
//         return t * t;
//     }
// });

