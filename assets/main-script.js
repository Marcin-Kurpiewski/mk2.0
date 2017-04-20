/**
 * Created by HP-M on 02.02.2017.
 */

// $(window).on("load", function(){
//     $(".preloader").fadeOut(500);
// });
//
//
$(document).ready(function () {
    $(".burger__btn").click(function () {
        $("[class*='nav']").toggleClass("nav-active");
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

