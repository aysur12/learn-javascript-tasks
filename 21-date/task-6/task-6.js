// Сколько сегодня прошло секунд? https://learn.javascript.ru/task/get-seconds-today

const getSecondsToday = function() {
  const nowDate = new Date();
  const todayDate = new Date(nowDate.getFullYear(), nowDate.getMonth(), nowDate.getDate());
  const diffTime = nowDate - todayDate;
  const diffTimeInSecond = Math.round(diffTime / 1000);
  return diffTimeInSecond;
}

console.log(getSecondsToday());