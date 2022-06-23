// Какой день месяца был много дней назад? https://learn.javascript.ru/task/get-date-ago

const getDateAgo = function(date, days) {
  const dateAgo = new Date(date);

  dateAgo.setDate(dateAgo.getDate() - days);
  
  return dateAgo.getDate();
}

let date = new Date(2015, 0, 2);

console.log( getDateAgo(date, 1) );
console.log( getDateAgo(date, 2) );
console.log( getDateAgo(date, 365) );