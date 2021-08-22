$(document).ready(function(){
    $('.city button').on('click', function() {        
      $(this).next('.areas').toggle('show');
    });
  });

  $(document).ready(function() {
    // Transition effect for navbar 
    $(window).scroll(function() {
      // checks if window is scrolled more than 500px, adds/removes solid class
      if($(this).scrollTop() > 32) { 
          $('.my-nav').addClass('solid');
      } else {
          $('.my-nav').removeClass('solid');
      }
    });
});


$(document).ready(function(){
  $('.side-barrr').hide();
  $('#menu-btn').on('click', function() {        
    $('.side-barrr').toggle('show');
  });
  $('.side-opacity').on('click', function() {        
    $('.side-barrr').toggle('show');
  });
});