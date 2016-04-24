function pow(x,n) {
  var result;
  if (x == 0 && n >= 0) {
    return x;
  } else if (x != 0 && n == 0) {
    result = 1;
    return result;
  } else if (x !=0 && n < 0) {
    result = 1;
    for (var i = 0; i < Math.abs(n); i++) {
      result = result * x;
    }
    return 1/result;
  }
  else {
    result = 1;
    for (var i = 0; i < n; i++) {
      result = result * x;
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
console.log('Результат = ' + result);
