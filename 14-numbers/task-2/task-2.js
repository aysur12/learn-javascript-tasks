// Ввод числового значения https://learn.javascript.ru/task/repeat-until-number

function readNumber() {
  const modalNum = prompt('Введите число', 0); 
  let alertNum = (modalNum === null || modalNum === '')
    ? alert('Число:' + null)
    : alert(`Число: ${modalNum}`);
    
  return alertNum;
}

readNumber();