// Сумма свойств объекта https://learn.javascript.ru/task/sum-object

let salaries = {
  John: 100,
  Ann: 160,
  Pete: 130
}

function showSumSalaries(obj) {
  let commonCount = 0;
  for (let key in obj) {
    commonCount += obj[key];
  }
  return commonCount;
}

let sum = showSumSalaries(salaries);