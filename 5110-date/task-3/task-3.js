//День недели в европейской нумерации https://learn.javascript.ru/task/weekday

const getLocalDay = function(date) {

  let day = date.getDay();

  if (day == 0) { 
    day = 7;
  }

  return day;
}