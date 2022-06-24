// Случайное число от min до max https://learn.javascript.ru/task/random-min-max

function random(max, min) {
  const randomNum = Math.random() * (max - min) + min;
  return randomNum;
}

alert( random(1, 5) );
alert( random(1, 5) );
alert( random(1, 5) );
