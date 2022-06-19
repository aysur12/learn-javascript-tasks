// Функция pow(x,n) https://learn.javascript.ru/task/pow

function pow(x, n) {
  return Math.pow(x, n);
}

function showExponentiation() {
  const x = prompt('Введите основание степени', '');
  const n = prompt('Введите показатель степени', '');
  
  return(x > 1) ? alert(pow(x,n)) : 'Введите только натуральные значения';
}

showExponentiation();
