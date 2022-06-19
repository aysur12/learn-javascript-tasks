/* 
  Перепишите функцию, используя оператор '?' или '||'
  https://learn.javascript.ru/task/rewrite-function-question-or
*/

function checkAge(age) {
  (age > 18) ? true : confirm('Родители разрешили?');
}

function checkAge(age) {
  return (age > 18) || confirm('Родители разрешили?');
}

