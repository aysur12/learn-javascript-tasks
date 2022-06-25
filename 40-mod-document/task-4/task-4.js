// Выведите список потомков в дереве https://learn.javascript.ru/task/tree-count

const liItems = document.querySelectorAll('li');

liItems.forEach((liItem) => {
  const childrenCount = liItem.querySelectorAll('li').length;

  (childrenCount > 0) 
  ? liItem.firstChild.data += ' [' + childrenCount + ']'
  : '';
})
