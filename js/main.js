 $(document).ready(function(){
    

    // make the scrolling smoothier using jQuery scrollTop()
    var $root = $('html, body');
   $('a').click(function(){
        $root.animate({
        scrollTop: $( $.attr(this, 'href') ).offset().top
    }, 1000);
    return false;
});
 });