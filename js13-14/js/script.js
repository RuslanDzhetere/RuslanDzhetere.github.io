'use strict';
$(function(){

  var html =$('#test').html();
  var data ={
      questions:[{
            title: 'Кто выиграл золотую бутсу ЧМ 2014 ?',
            answers:[
              {
                text:'Хамес Родригес',
                correct:true
              },
              {
                text:'Лионель Месси',
                correct:false
              },
              {
                text:'Мирослав Клозе',
                correct:false
              },
            ]
          },
          {
          title: 'Какая сборная по футболу чаще всех выигрывала чемпионат мира по футболу?',
          answers:[
            {
              text:'Италия',
              correct:false
            },
            {
              text:'Германия',
              correct:false
            },
            {
              text:'Бразилия',
              correct:true
            },
          ]
        },
        {
          title: 'Какой вратарь забил более 100 голов за свою карьеру? ',
          answers:[
            {
              text:'Рене Игита',
              correct:false
            },
            {
              text:'Роже́рио Сени',
              correct:true
            },
            {
              text:'Хосе Луис Чилаверт',
              correct:false
            },
          ]
        }
      ]
    };

localStorage.setItem('save', JSON.stringify(data));
var load = JSON.parse(localStorage.getItem('save'));
var content = tmpl(html, load);
$('body').append(content);
});


$(function(){
  var elem = document.querySelector('.footer');
  elem.addEventListener("click", function() {
    $('.window').css({visibility: "visible"});
  $(this).css({display: "none"});
  var count = 0, message;
  for (var i = 0; i < $("input:checkbox:checked").length; i++) {
     if ($("input:checkbox:checked")[i].value == 'true') {
       count++;
     }
}

if (count!=0 && count === $("input:checkbox:checked").length) {
   message = 'Поздравляю! Вы сдали тест!';
 } else {
   message = 'Тест не сдан. Попробуйте еще раз';
 }
 count = 0;
 $('.window h2').append(message);
  $('.window').css({visibility: "visible"});


  var closeWindow = document.querySelector('.close');

    closeWindow.addEventListener('click', function() {
      $('.window h2').empty();
      $('.footer').css({display: "block"});
      $('.window').css({visibility: "hidden"});
      $("input:checkbox:checked").removeAttr('checked')

    });
});
});
