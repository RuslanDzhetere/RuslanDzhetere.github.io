$(function() {
    var leftUIEl = $('.jcarouselControlPrev');
    var rightUIEl = $('.jcarouselControlNext');
    var elementsList = $('.jcarouselList');

    var pixelsOffset = 600;
    var currentLeftValue = 0;
    var elementsCount = elementsList.find('li').length;
    var minimumOffset = - ((elementsCount - 1) * pixelsOffset);
    var maximumOffset = 0;

    leftUIEl.click(function() {

        if (currentLeftValue != maximumOffset) {
            currentLeftValue += 600;
            elementsList.animate({ left : currentLeftValue + "px"}, 500);
        }
    });

    rightUIEl.click(function() {
      if (currentLeftValue != minimumOffset) {
             currentLeftValue -= 600;
             elementsList.animate({ left : currentLeftValue + "px"}, 500);
         }
  });
});

$(function(){
var params = {
		changedEl: ".lineForm select",
		visRows: 5,
		scrollArrows: true
	}
  cuSel(params);

        var params = {
            changedEl: "#city",
            scrollArrows: false
        }

        cuSel(params);
});


$(function(){
    $(".check").click(
      function() {
           changeCheck($(".check"));
      });
});

function changeCheck(el) {
     var el = $(".niceCheck");
      var input = el.find("input").eq(0);
   	 if(!input.attr("checked")) {
		el.css("background-position","0 -41px");
		input.attr("checked", true)
	} else {
		el.css("background-position","0 0");
		input.attr("checked", false)
	}
     return true;
}


$(function(){
  $('nav li').hover(function(){
   $(this).children('ul').stop(false, true).fadeIn(300).animate({
     backgroundColor: 'rgb(175,75,75)'
   },400);

 },function(){
$  (this).children('ul').stop(false, true).fadeOut(300).animate({
  backgroundColor: 'rgb(225,75,75)'
},400);
  });

});
