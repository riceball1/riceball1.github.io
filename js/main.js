 $(document).ready(function(){
    
  // jQuery animation for works.html page
    $('div.eq').hover(function() {
      $(this).css('background-color', 'rgb(243, 195, 61)');
      $(this).css('font-weight', 'bold');
    },
    function() {
       $(this).css('background-color', '');
      $(this).css('font-weight', '');
    });

 });