// Усечение строки https://learn.javascript.ru/task/truncate

const truncate = function(str, maxLength) {
  const arrString = str.split(''); 
  arrString.splice(maxLength-1, str.length, '...');
  const truncateStr = (str.length < maxLength) ? str : arrString.join('');

  return truncateStr;
}