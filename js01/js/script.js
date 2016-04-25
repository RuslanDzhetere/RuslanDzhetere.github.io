function pow(x,n) {
    var result;
    if (x == 0) {
      return 0;
    } else if (x != 0 && n == 0) {
      result = 1;
      return result;
    } else {
      result = 1;
      for (var i = 0; i < Math.abs(n); i++) {
        result = result * x;
      }
      if (n>0) {
        return result;
      } else {
      return 1/result;
      }
    }
  }

var base,exponent;
while (base == null || base == '') {
var base = prompt('Введите основание числа');
}
while (exponent == null || exponent == '') {
var exponent = prompt('Введите степень числа');
}

var result = pow(base,exponent);
console.log('Результат = ' + result);
