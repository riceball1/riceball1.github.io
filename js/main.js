$(function() {

    // jumbotronFn();

    // jQuery animation for works.html page
    $('.flexbox-container > div').hover(function() {
            $(this).css('background-color', 'rgb(243, 195, 61)');
            $(this).css('font-weight', 'bold');
        },
        function() {
            $(this).css('background-color', '');
            $(this).css('font-weight', '');
        });

});

// function jumbotronFn() {
//      $('.jumbotron').slideUp(7000);
//   }
