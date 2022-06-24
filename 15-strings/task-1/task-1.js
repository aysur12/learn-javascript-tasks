// Сделать первый символ заглавным https://learn.javascript.ru/task/ucfirst

const ucFirst = function(str) {
  const strWithUcFirst = str[0].toUpperCase() + str.slice(1);
  return strWithUcFirst;
}

