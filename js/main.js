var txtbox = $('.text-box');

$(document).ready(function() {
    // runs textBox after 7 secs
    setTimeout(textBox, 7000);
    // closes after 40 secs
    setTimeout(closeBox, 40000);

    // closes text-box 
    $('.close-text').on('click', function() {
        txtbox.slideToggle();
    });

});


function textBox() {
    txtbox.slideToggle();
}

function closeBox() {
    txtbox.slideToggle();
}
