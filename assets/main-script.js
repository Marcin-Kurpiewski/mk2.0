/**
 * Created by HP-M on 02.02.2017.
 */

// $(window).on("load", function(){
//     $(".preloader").fadeOut(500);
// });
//
//
// $(document).ready(function () {
//
//     $(".social").click(function () {
//         $("social").toggle("slow");
//     });
// });

//
// $(document).ready(function () {
//     $(".burger__btn").on("click", function () {
//             $(".burger__btn").toggle(function () {
//                     $(".nav").show();
//                 },
//                 function () {
//                     $(".nav").hide();
//                 });
//         });
//
// });

// var svg = new Walkway(options);
// // Draw when ready, providing an optional callback
// svg.draw(callback);
//
// // Options passed in as an object, see options below.
// var svg = new Walkway({ selector: '#test'});
//
// // Overwriting defaults
var svg = new Walkway({
    selector: '#test',
    duration: '3000',
    // can pass in a function or a string like 'easeOutQuint'
    easing: function (t) {
        return t * t;
    }
});

