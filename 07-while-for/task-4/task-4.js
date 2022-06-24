// Вывести простые числа https://learn.javascript.ru/task/list-primes

const checkIsPrimeNumber = function(num) {
  for( let i = 2, maxNum = Math.sqrt(num); i <= maxNum; i++) {
    if (num % i === 0) { 
      return false; } 
  } 
  return num > 1; 
}

const makePrimeNumberAlert = function(n) {
  for (let i = 2; i <= n; i++) {
    if (checkIsPrimeNumber(i)) {
      alert(i)
    }
  }
}

makePrimeNumberAlert(10);



