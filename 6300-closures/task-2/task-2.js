// Фильтрация с помощью функции https://learn.javascript.ru/task/filter-through-function

const inBetween = function(a, b) {
  return function(x) {
    return x >= a && x <= b;
  };
}

const inArray = function(arr) {
  return function(x) {
    return arr.includes(x);
  };
}

let arr = [1, 2, 3, 4, 5, 6, 7];

console.log(arr.filter(inBetween(3, 6)));
console.log(arr.filter(inArray([1, 2, 10])));