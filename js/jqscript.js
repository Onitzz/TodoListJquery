$(document).ready(function () {
    var p = $('p');

    $('.para').click(function () {
        $(this).toggle(1000);
    });

    $('h1').click(function () {
        $('.para').toggle(1000);
    });

    console.log(p);
});