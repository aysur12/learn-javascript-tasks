// Перепишите 'if..else' в '?' https://learn.javascript.ru/task/rewrite-if-else-question

let message = (login == 'Сотрудник') ? 'Привет' :
  (login == 'Директор') ? 'Здравствуйте' :
  (login == '') ? 'Нет логина' : '';
