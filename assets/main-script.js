/**
 * Created by HP-M on 02.02.2017.
 */

$(window).on("load", function(){
    $(".preloader").fadeOut(500);
});


$(document).ready(function () {

    $(".social").click(function () {
        $("social").toggle("slow");
    });
});