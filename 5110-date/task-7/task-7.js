// Сколько секунд осталось до завтра? https://learn.javascript.ru/task/get-seconds-to-tomorrow

const  getSecondsToTomorrow = function() {
  const nowDate = new Date();
  const tomorrowDate = new Date(nowDate.getFullYear(), nowDate.getMonth(), nowDate.getDate() + 1);
  const diffTime = tomorrowDate - nowDate;
  const diffTimeInSecond = Math.round(diffTime / 1000);
  return diffTimeInSecond;
}

console.log(getSecondsToTomorrow());