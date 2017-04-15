/**
 * Created by אריאל on 13/04/2017.
 */
$(document).ready(function() {

    $("body").addClass("loaded");

    $(function () {
        $('a[rel="lightbox"]').fluidbox();
    })

});

function vote() {
    var name = document.getElementById('vote');
    alert("You have voted for *I WISH I KNEW JAVASCRIPT*");
}

