// Переписать условия "if" на "switch" https://learn.javascript.ru/task/rewrite-if-switch

const number = +prompt('Введите число между 0 и 3', '');

switch(number) {
  case 0:
    alert('Вы ввели число 0');
    break;

  case 1:
    alert('Вы ввели число 1');
    break;

  case 2:
  case 3:
    alert('Вы ввели число 2, а может и 3');
    break;
}