 $(document).ready(function(){
    

//     // make the scrolling smoothier using jQuery scrollTop()
//     var $root = $('html, body');
//    $('a').click(function(){
//         $root.animate({
//         scrollTop: $( $.attr(this, 'href') ).offset().top
//     }, 800);
//     return false;
// });

  $('.box').click(function(){
    $(this).animate({
        left: '250px',
        height: '+=20px',
        width: '+=20px'
      });
  });

  $('.reset').on('click', function(){
    $('.box').css('height', '100px');
    $('.box').css('width', '100px');
  });

 });