// Повторять цикл, пока ввод неверен https://learn.javascript.ru/task/repeat-until-correct

let currentNumber;

do {
  currentNumber = prompt("Введите число больше 100?", 0);
} while ( currentNumber <= 100 && currentNumber);