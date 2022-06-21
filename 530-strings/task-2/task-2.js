// Проверка на спам https://learn.javascript.ru/task/check-spam

const checkSpam = function(str) {
  const strLower = str.toLowerCase();
  return strLower.includes('viagra') || strLower.includes('XXX');
}