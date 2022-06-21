// Сумма введённых чисел https://learn.javascript.ru/task/array-input-sum

const sumInput = function() {
  const modalArr = [];

  while (true) {
    const modalValue = prompt('Введите значение', '');
    if (modalValue === null || modalValue === '') break;
    modalArr.push(+modalValue);
  }
  modalArr.reduce((x, y) => x + y, 0);
  return modalArr;
};

alert(sumInput());