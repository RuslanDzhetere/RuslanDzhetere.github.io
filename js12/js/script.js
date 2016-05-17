$(function($){

  var html =$('#test').html();
  console.log($('#test').html());
  var data ={
    name:'Джетере Руслан Ахмедович',
    photo:'img/ruslan.jpg',
    position:'Аналитик департамента управления цепями поставок',
    list:[
      'Мечтаю стать frontend-девелопером',
      'Зарабатывать достойные деньги',
      'Изменить свою жизнь к лучшему'
    ],
    phone: '+380506981741',
    facebook: 'https://www.facebook.com/rdzhetere',
    feedback: 'Благодарю за отличную организацию курса'

  };

var content = tmpl(html, data);

$('body').append(content);

});
