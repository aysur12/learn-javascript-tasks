/* Цветные часы с использованием setInterval
https://learn.javascript.ru/task/clock-setinterval
*/

const updateTime = function() {
  const clock = document.querySelector('.clock');
  const date = new Date();

  const hours = date.getHours();
  if (hours < 10) {
    hours = '0' + hours;
  }  
  clock.children[0].innerHTML = hours;

  const minutes = date.getMinutes();
  if (minutes < 10) {
    minutes = '0' + minutes;
  }  
  clock.children[1].innerHTML = minutes;

  const seconds = date.getSeconds();
  if (seconds < 10) {
    seconds = '0' + seconds;
  }  
  clock.children[2].innerHTML = seconds;
}

let timer;

const clockStart = function() {
  if (!timer) {
    timer = setInterval(updateTime, 1000);
  }
  updateTime(); 
}

const clockStop = function() {
  clearInterval(timer);
  timer = null; 
}

const btnStartTimer = document.querySelector('.start-timer');
btnStartTimer.addEventListener('click', clockStart);

const btnStopTimer = document.querySelector('.stop-timer');
btnStopTimer.addEventListener('click', clockStop);

