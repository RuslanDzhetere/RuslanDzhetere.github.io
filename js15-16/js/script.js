$(function() {
  var input = document.getElementById("q");
  input.focus();
  $('#f').on('submit', function() {
  var enteredQuery = $('#q').val();
  var API_KEY = '2630817-b95f50d1e0fc2b68ed1f4d734';
	var URL = "https://pixabay.com/api/?key="+API_KEY+"&q="+encodeURIComponent(enteredQuery);
	 $.getJSON(URL, function(data){
     var ul = document.createElement("ul");
	     if (parseInt(data.totalHits) > 0)
	        $.each(data.hits, function(i, hit){
            var li = document.createElement("li");
            li.innerHTML = '<a href="'+hit.pageURL+'" title="" target="_blank">'+ '<img class="image-output" src="'+hit.previewURL+'">'+"</a>";
            ul.appendChild(li);
          });
	  $('#photos').html(ul);
	});
   return false;
 });
});

function Human(){
  this.name= 'Adam',
  this.age = '33',
  this.sex = 'male',
  this.growth = '1.72',
  this.weight = '72'
}

function Worker(){
  this.placeOfWork= 'New York',
  this.salary = '10000$',
  this.work = function(){
    alert("Work")
  }
}

Worker.prototype = new Human();

function Student(){
  this.placeOfStudy= 'Oxford',
  this.scholarship = '2000$',
  this.work = function(){
    alert("Watch TV shows")
  }
}

Student.prototype = new Human();


var Worker1 = new Worker();
console.log('Worker1 name: ', Worker1.name);
console.log('Worker1 age: ', Worker1.age);
console.log('Worker1 sex: ', Worker1.sex);
console.log('Worker1 height: ', Worker1.growth);
console.log('Worker1 weight: ', Worker1.weight);
console.log('Worker1 place of job: ', Worker1.placeOfWork);
console.log('Worker1 salary: ', Worker1.salary);
console.log('---------------------------------------------------');

var Student1 = new Student();
console.log('Student1 name: ', Student1.name);
console.log('Student1 age: ', Student1.age);
console.log('Student1 sex: ', Student1.sex);
console.log('Student1 height: ', Student1.growth);
console.log('Student1 weight: ', Student1.weight);
console.log('Student1 place of study: ', Student1.placeOfStudy);
console.log('Student1 scholarship: ', Student1.scholarship);
