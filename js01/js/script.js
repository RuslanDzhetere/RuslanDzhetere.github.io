function pow(x,n) {
  var result;
  if (x == 0 && n >= 0) {
    flag = true;
    return x;
  } else if (x != 0 && n == 0) {
    result = 1;
    flag = true;
    return result;
  } else {
    result = 1;
    for (var i = 0; i < n; i++) {
      result = result * x;
      flag = true;
    }
    return result;
  }
  }

var base,exponent;
while (base == null || base == '') {
var base = prompt('Введите основание числа');
}
while (exponent == null || exponent == '') {
var exponent = prompt('Введите степень числа');
}
var flag = false;
var result = pow(base,exponent);
if (flag == true){
console.log('Результат = ' + result);
} else {
console.log('Степень отрицательного числа не поддерживается');
}
