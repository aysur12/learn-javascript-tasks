// Сортировать по полю https://learn.javascript.ru/task/sort-by-field

let users = [
  { name: "John", age: 20, surname: "Johnson" },
  { name: "Pete", age: 18, surname: "Peterson" },
  { name: "Ann", age: 19, surname: "Hathaway" }
];

const byField = function(fieldName) {
  return (x, y) => x[fieldName] > y[fieldName] ? 1 : -1;
}
