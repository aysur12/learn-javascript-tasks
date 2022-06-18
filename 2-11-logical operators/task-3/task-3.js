// Проверка логина https://learn.javascript.ru/task/check-login

const modalQuestion = prompt('Кто там?');

const trueAnswer = 'Админ';
const falseAnswer = 'Я вас не знаю';
const cancelAlert = 'Отменено';
const truePassword = 'Я Главный';
const truePasswordAlert = 'Здравствуйте!';
const falsePasswordAlert = 'Неверный пароль';

if (modalQuestion === trueAnswer) {
  const trueModalQuestion = prompt('Пароль?');
  
  if (trueModalQuestion === truePassword) {
    alert(truePasswordAlert);
  } else if (trueModalQuestion === null || trueModalQuestion === '') {
    alert(cancelAlert);
  } else {
    alert(falsePasswordAlert);
  }
} else if (modalQuestion === null || modalQuestion === '') {
  alert(cancelAlert);
} else {
  alert(falseAnswer);
}

