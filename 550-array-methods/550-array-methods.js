// Переведите текст вида border-left-width в borderLeftWidth https://learn.javascript.ru/task/camelcase

const camelize = function(str) {
  const arrSplit = str.split('-');
  const arrMap = arrSplit.map(
    (item, index) => index === 0 ? item : item[0].toUpperCase() + item.slice(1)
  );
  const arrJoin = arrMap.join('');
  return arrJoin;
};

console.log(camelize('background-color'));

// Фильтрация по диапазону https://learn.javascript.ru/task/filter-range

const filterRange = function(arr, a, b) {
  const filteredArr = arr.filter(item => (item >= a && item <= b));
  return filteredArr;
}

let arrForFilter = [5, 3, 8, 1];
console.log(filterRange(arrForFilter, 1, 4));

// Фильтрация по диапазону "на месте" https://learn.javascript.ru/task/filter-range-in-place

const filterRangeInPlace = function(arr, a, b) {

  for (let i = 0; i < arr.length; i++) {
    let value = arr[i];

    if (value < a || val > b) {
      arr.splice(i, 1);
      i--;
    }
  }

}
let arr1 = [5, 3, 8, 1];

console.log(filterRangeInPlace(arr1, 1, 4));
console.log(arr1);

// Сортировать в порядке по убыванию https://learn.javascript.ru/task/sort-back

let arrNum = [5, 2, 1, -10, 8];

arrNum.sort((a, b) => b - a);

console.log(arrNum)

// Скопировать и отсортировать массив https://learn.javascript.ru/task/copy-sort-array

const copySorted = function(arr) {
  const arrSlice = arr.slice();
  const arrSort = arrSlice.sort();
  return arrSort;
}

let arr2 = ["HTML", "JavaScript", "CSS"];

let sorted = copySorted(arr2);

console.log(sorted);
console.log(arr2); 

// Создать расширяемый калькулятор https://learn.javascript.ru/task/calculator-extendable

function Calculator() {
  this.methods = {
    '-': (a, b) => a - b,
    '+': (a, b) => a + b
  };

  this.calculate = function(str) {
    const splitArr = str.split();
      a = +splitArr[0],
      operator = splitArr[1],
      b = +splitArr[2]
    if (!this.methods[operator] || isNaN(a) || isNaN(b)) {
      return NaN;
    }

    return this.methods[operator](a, b);
  }
  
  this.addMethod = function(name, func) {
    this.methods[name] = func; 
  }
}

let powerCalc = new Calculator;
powerCalc.addMethod("*", (a, b) => a * b);
powerCalc.addMethod("/", (a, b) => a / b);
powerCalc.addMethod("**", (a, b) => a ** b);

let result = powerCalc.calculate("2 ** 3");
console.log(result);

// Трансформировать в массив имён https://learn.javascript.ru/array-methods#tasks

let vasya = {name: "Вася", age: 25};
let petya = {name: "Петя", age: 30};
let masha = {name: "Маша", age: 28};

let users = [vasya, petya, masha ];

let names = users.map(item => item.name);

console.log(names); 

// Трансформировать в объекты https://learn.javascript.ru/task/map-objects

let vasya1 = {name: "Вася", surname: "Пупкин", id: 1};
let petya1 = {name: "Петя", surname: "Иванов", id: 2};
let masha1 = {name: "Маша", surname: "Петрова", id: 3};

let users2 = [vasya1, petya1, masha1];

let usersMapped = users2.map(user => ({
  fullName: `${user.name} ${user.surname}`,
  id: user.id
}));

console.log(usersMapped[0].id);
console.log(usersMapped[0].fullName);

// Отсортировать пользователей по возрасту https://learn.javascript.ru/task/sort-objects

const sortByAge = function(arraySort) {
  const assortedArr = arraySort.sort((a, b) => a.age > b.age ? 1 : -1);
}

let vasya2 = { name: "Вася", age: 25 };
let petya2 = { name: "Петя", age: 30 };
let masha2 = { name: "Маша", age: 28 };

let arr = [ vasya2, petya2, masha2 ];

sortByAge(arr);

console.log(arr[0].name);
console.log(arr[1].name); 
console.log(arr[2].name); 


// Получить средний возраст https://learn.javascript.ru/task/average-age

const getAverageAge = function(users) {
  const sumAge = users.reduce(
    (previousValue, currentValue) => previousValue + currentValue.age, 0
  );
  const middleAge = sumAge / users.length;

  return Math.round(middleAge);
}

let vasya3 = { name: "Вася", age: 25 };
let petya3 = { name: "Петя", age: 30 };
let masha3 = { name: "Маша", age: 29 };

let arr3 = [vasya3, petya3, masha3];

console.log(getAverageAge(arr3));

// Оставить уникальные элементы массива https://learn.javascript.ru/task/array-unique

const unique = function(arr) {
  const uniqueValues = [...arr];
  return [...new Set(uniqueValues)];
}

let strings = ["кришна", "кришна", "харе", "харе",
  "харе", "харе", "кришна", "кришна", ":-O"
];

console.log( unique(strings) ); 