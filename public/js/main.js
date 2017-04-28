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




// var vC = 0;
// var vA = 0;
// var vB = 0;
// var vWW = 0;
// var vF = 0;
// var vBO = 0;
// var vC, vA, vB, vWW, vF, vBO;


var heroId;
function votesCounter(heroId, hero) {
    hero++;

    document.getElementById(heroId).innerHTML = hero.toString();
    // switch (hero){
    //     case "Cyborg":
    //         vC += 1;
    //         document.getElementById("vC").innerHTML = vC;
    //         break;
    //     case "Aquaman":
    //         vA += 1;
    //         document.getElementById("vA").innerHTML = vA;
    //         break;
    //     case "Batman":
    //         vB += 1;
    //         document.getElementById("vB").innerHTML = vB;
    //         break;
    //     case "Wonder Woman":
    //         vWW += 1;
    //         document.getElementById("vWW").innerHTML = vWW;
    //         break;
    //     case "The Flash":
    //         vF += 1;
    //         document.getElementById("vF").innerHTML = vF;
    //         break;
    //     case "Black Obama":
    //         vBO += 1;
    //         document.getElementById("vBO").innerHTML = vBO;
    //         break;
    // }
}

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
{
    document.write('<script src="./js/jquery.1.11.min.js"><\/script>');
}