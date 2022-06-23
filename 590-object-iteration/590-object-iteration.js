// Сумма свойств объекта https://learn.javascript.ru/task/sum-salaries

const sumSalaries = function(salaries) {
  const salariesArr = Object.values(salaries);
  const commonSalaries = salariesArr.reduce((x, y) => x + y, 0);

  return commonSalaries;
}

let salaries = {
  "John": 100,
  "Pete": 300,
  "Mary": 250
};

console.log(sumSalaries(salaries));

// Подсчёт количества свойств объекта https://learn.javascript.ru/task/count-properties

const count = function(obj) {
  const propertyArr = Object.entries(obj);
  
  return propertyArr.length
}

let user = {
  name: 'John',
  age: 30
};

console.log(count(user));