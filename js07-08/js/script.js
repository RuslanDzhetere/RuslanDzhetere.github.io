$(function() {
        $('#content div').hide(); // Скрытое содержимое
        $('#lineTabs li:first').attr('id','current');
        $("#content div:first").fadeIn();

    $('#lineTabs a').click(function(e) {
        e.preventDefault();
        $('#content div').hide();
        $('#lineTabs li').attr('id','');
        $(this).parent().attr('id','current');
        $('#' + $(this).attr('title')).fadeIn();
    });
});


$(function() {
  $('input').hover(function(){
    $(this).next('.tips').animate({
      opacity: 1
    }, 'slow');
    }, function() {
    	$(this).next('.tips').animate({
        opacity: 0
      }, 'fast');
    });

    $('.button').click(function() {
  	$('.tips').animate({
      opacity: 1
    }, 'slow');
  	function func() {
      $('.tips').animate({
        opacity: 0
      }, 'slow');
    }
  });
});
