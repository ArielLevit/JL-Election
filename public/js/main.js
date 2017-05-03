/**
 * Created by אריאל on 13/04/2017.
 */
$(document).ready(function() {

    $("body").addClass("loaded");

    $(function () {
        $('a[rel="lightbox"]').fluidbox();
    })

});
//Show model and X button
$(function candidates () {
    $(".nav-tabs li a").on("click", function () {
        var img = $(this).attr('data-img');
        $('#' + img).attr('src','./img/models/' + img + '.png').delay(500).slideDown('slow');
        $('.xButton').delay(800).slideDown('slow');
    });

    $(".xButton").on("click", function b () {
        var img = $(this).attr('data-img');
        $(img).hide();
        $(this).hide();
    });
});
//Show model on load window at first time
$( window ).on( "load", function () {
    var imgX = $(".nav-tabs li a").attr('data-img');
    $('#' + imgX).attr('src','./img/models/' + imgX + '.png').delay(500).slideDown('slow');
    $('.xButton').delay(800).slideDown('slow');
} );

//Voting function
var name;
function voteMe(name) {
    alert("Thanks for voting to " + name + ", see'ya in 4 years");
}
$(function () {
    $('.button').on('click', function () {
        var voteid = $(this).attr('data-voteid');
        $(voteid).html(function(i, val) { return val*1+1 });
    });
});

//Side Nav
$(function() {
    var navBtn = $('.nav-btn');
    function toggleNav() {
        navBtn.toggleClass('open');
        $('nav').toggleClass('open');
        $('.container').toggleClass('open');
    }
    navBtn.click(function() {
        toggleNav();
    });
    $('nav ul li a').click(function(e) {
        toggleNav();
        return false;
    })
} );

if (!window.jQuery)
{document.write('<script src="./js/jquery.1.11.min.js"><\/script>');}
