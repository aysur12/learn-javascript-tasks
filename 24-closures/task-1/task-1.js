// Сумма с помощью замыканий https://learn.javascript.ru/task/closure-sum

const sum = function(a) {
  return function(b) {
    return a + b; 
  };
}

console.log(sum(2)(3));