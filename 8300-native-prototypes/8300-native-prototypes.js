// Добавить функциям метод "f.defer(ms)" https://learn.javascript.ru/task/defer-to-prototype

Function.prototype.defer = function(ms) {
  setTimeout(this, ms);
}

function f() {
  alert("Hello!");
}

f.defer(1000);

/* Добавьте функциям декорирующий метод "defer()"
https://learn.javascript.ru/task/defer-to-prototype-extended
*/

Function.prototype.defer = function(ms) {
  const f = this;
  return function(...args) {
    setTimeout(() => f.apply(this, args), ms);
  }
};

function f(a, b) {
  alert( a + b );
}

f.defer(1000)(1, 2);
