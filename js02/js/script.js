var arr = [];
for(var i=0; i < 5; i++) {
     arr[i] = prompt('Введите ' + (i+1) +' имя');
   }
var user;
while (user == null || user == '') {
   var user = prompt('Введите имя пользователя');
}

var flag = false;
for(var i = 0; i < arr.length; i++) {
     if (arr[i] == user){
       if(arr[i] == null || arr[i] == '') {
         flag = false;
       } else {
         flag = true;
         break;
         }
      } else {
        flag = false;
      }
 }

if(flag == true) {
  alert(user + ", вы успешно вошли");
} else {
  alert("Пользователь " + user + " не зарегистрирован в системе");
}
