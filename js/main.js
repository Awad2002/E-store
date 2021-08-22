$(document).ready(function(){
    $('.city button').on('click', function() {        
      $(this).next('.areas').toggle('show');
    });
  });

  $(document).ready(function() {
    // Transition effect for navbar 
    $(window).scroll(function() {
      // checks if window is scrolled more than 500px, adds/removes solid class
      if($(this).scrollTop() > 150) { 
          $('.my-nav.on-scroll').addClass('solid');
      } else {
          $('.my-nav.on-scroll').removeClass('solid');
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