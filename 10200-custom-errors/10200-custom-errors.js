// Наследование от SyntaxError https://learn.javascript.ru/task/format-error

class FormatError extends SyntaxError {
  constructor(message) {
    super(message);
    this.name = 'FormatError';
  }
}

let err = new FormatError('ошибка форматирования');

alert( err.message );
alert( err.name );
alert( err.stack );

alert( err instanceof FormatError );
alert( err instanceof SyntaxError );