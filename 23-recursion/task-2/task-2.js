// Вычислить факториал https://learn.javascript.ru/task/factorial

const factorial = function(n) {
  return (n === 1) ? 1 :  n * factorial(n - 1);
}

console.log(factorial(5))