var objTest ={
    questions:[
      {
      title: 'Вопрос №1',
      answers:[
        {
          text:'Вариант ответа №1',
          correct:true
        },
        {
          text:'Вариант ответа №2',
          correct:false
        },
        {
          text:'Вариант ответа №3',
          correct:false
        },
      ]
    },
    {
    title: 'Вопрос №2',
    answers:[
      {
        text:'Вариант ответа №1',
        correct:false
      },
      {
        text:'Вариант ответа №2',
        correct:false
      },
      {
        text:'Вариант ответа №3',
        correct:true
      },
    ]
  },
  {
    title: 'Вопрос №3',
    answers:[
      {
        text:'Вариант ответа №1',
        correct:false
      },
      {
        text:'Вариант ответа №2',
        correct:false
      },
      {
        text:'Вариант ответа №3',
        correct:true
      },
    ]
  }
],

create: function (tagName, className, parentName) {
        tagName = document.createElement(tagName);
        parentName.appendChild(tagName);
        tagName.classList.add(className);
      },

inner: function (element, someText) {
        element.innerHTML = someText;
      },

createCheckbox: function (tag, text) {
        tag.innerHTML = '<label>' + '<input type="checkbox">' + text + '</label>';
      }
}

objTest.create('div', 'wrapper', document.body);
wrapper = document.getElementsByClassName('wrapper');

objTest.create('h1', 'header', wrapper[0]);
header = document.querySelector('h1');
objTest.inner(header, 'Тест по программированию');

objTest.create('form', 'formMain', wrapper[0]);
formMain=document.querySelector('form');

objTest.create('ol', 'listQuestions', formMain);
listQuestions = document.getElementsByClassName('listQuestions');

for (i=0; i<objTest.questions.length; i++) {
    objTest.create('li', 'listLiQuestions', listQuestions[0]);
    listLiQuestions = document.getElementsByClassName('listLiQuestions');
    objTest.inner(listLiQuestions[i], objTest.questions[i].title);
    objTest.create('ul', 'listAnswers', listLiQuestions[i]);
    listAnswers = document.getElementsByClassName('listAnswers');
    for (j=0; j<objTest.questions[i].answers.length; j++) {
        objTest.create('li', 'listLiAnswers', listAnswers[i]);
        listLiAnswers = listAnswers[i].getElementsByClassName('listLiAnswers');
        objTest.createCheckbox(listLiAnswers[j], objTest.questions[i].answers[j].text);
    }
}

objTest.create('input', 'footer', formMain);
footer = document.getElementsByClassName('footer');
footer[0].setAttribute('type', 'submit');
footer[0].setAttribute('value', 'Проверить мои результаты');
