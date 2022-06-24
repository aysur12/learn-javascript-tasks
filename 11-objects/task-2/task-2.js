// Проверка на пустоту https://learn.javascript.ru/task/is-empty

function isEmpty(obj) {
  for (let key in obj) {
    return false;
  }
  return true;
}

