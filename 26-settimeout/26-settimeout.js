// Вывод каждую секунду https://learn.javascript.ru/task/output-numbers-100ms

const printNumbers = function(from, to) {
  const currentValue = from;

  setTimeout(function showNumber() {
    alert(currentValue);
    if (currentValue < to) {
      setTimeout(showNumber(), 1000);
    }
    currentValue++;
  }, 1000);
}

printNumbers(5, 10)