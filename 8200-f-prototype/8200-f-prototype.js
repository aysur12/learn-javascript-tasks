/* Создайте новый объект с помощью уже существующего
https://learn.javascript.ru/task/new-object-same-constructor
*/

function Animal(name) {
  this.name = name;
}
const rabbit = new Animal('Bunny');
const monkey = new rabbit.constructor('Chucky');

console.log(rabbit.name);
console.log(monkey.name);

// Пример функции-конструктора, с которой такой код поведёт себя неправильно

// function Animal(name) {
//   this.name = name;
// }

// Animal.prototype = {};

// const rabbit = new Animal('Bunny');
// const monkey = new rabbit.constructor('Chucky');

// console.log(rabbit.name);
// console.log(monkey.name);


