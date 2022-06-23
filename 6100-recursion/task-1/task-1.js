// Вычислить сумму чисел до данного https://learn.javascript.ru/task/sum-to

const sumTo = function(n) {
  let sumValue = 0;
  for (let i = 1; i <= n; i++) {
    sumValue += i;
  }

  return sumValue;
}

console.log(sumTo(100));

const sumTo2 = function(n) {
  if (n === 1) {
    return 1;
  }

  return n + sumTo2(n-1);
}

console.log(sumTo2(100));

const sumTo3 = function(n) {
  return n * (n + 1) / 2;
}

console.log(sumTo3(100));