// Название JavaScript https://learn.javascript.ru/task/check-standard

const modalQuestion = prompt('Какое "официальное" название JavaScript?');
const trueAnswer = 'ECMAScript';
const trueAlert = 'Верно!';
const falseAlert = 'Не знаете? “ECMAScript”!';

if (modalQuestion === trueAnswer) {
  alert(trueAlert);
} else {
  alert(falseAlert);
}