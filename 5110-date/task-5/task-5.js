// Последнее число месяца? https://learn.javascript.ru/task/last-day-of-month

const getLastDayOfMonth = function(year, month) {
  const date = new Date(year, month + 1, 0);
  return date.getDate();
}

console.log(getLastDayOfMonth(2012, 1));
