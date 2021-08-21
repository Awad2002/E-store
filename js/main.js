$(document).ready(function(){
    $('.areas').hide();
    $('.city button').on('click', function() {        
      $(this).next('.areas').toggle('show');
    });
  });
