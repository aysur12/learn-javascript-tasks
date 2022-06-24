// Ошибка создания экземпляра класса https://learn.javascript.ru/task/class-constructor-error

class Animal {
  constructor(name) {
    this.name = name;
  }
}

class Rabbit extends Animal {
  constructor(name) {
    super(name);
    this.created = Date.now();
  }
}

let rabbit = new Rabbit("Белый кролик"); 
alert(rabbit.name);