// Покажите день недели https://learn.javascript.ru/task/get-week-day

const getWeekDay = function(date) {
  const week = ['ВС', 'ПН', 'ВТ', 'СР', 'ЧТ', 'ПТ', 'СБ'];

  return week[date.getDay()];
}

let date = new Date(2014, 0, 3);
console.log(getWeekDay(date));