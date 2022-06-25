// Очистите элемент https://learn.javascript.ru/task/clear-elem

function clear(elem) {
  elem.innerHTML = '';
}

const ol = document.querySelector('#elem');

clear(ol);