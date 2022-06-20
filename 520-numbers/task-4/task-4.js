// Случайное целое число от min до max https://learn.javascript.ru/task/random-int-min-max

const randomInteger = function(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  const randomNum = Math.floor(Math.random() * (max - min)) + min;;

  return randomNum;
}

alert( randomInteger(1, 5) );
alert( randomInteger(1, 5) );
alert( randomInteger(1, 5) );