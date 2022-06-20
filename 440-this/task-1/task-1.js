// Создайте калькулятор https://learn.javascript.ru/task/calculator

let calculator = {
  read() {
    this.num1 = +prompt('Введите первое число', '');
    this.num2 = +prompt('Введите второе число число', '');
  },

  sum() {
    return this.num1 + this.num2;
  },

  mul() {
    return this.num1 * this.num2;
  }
};

calculator.read();
alert( calculator.sum() );
alert( calculator.mul() );