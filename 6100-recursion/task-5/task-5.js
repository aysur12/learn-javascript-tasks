/* Вывод односвязного списка в обратном порядке
https://learn.javascript.ru/task/output-single-linked-list-reverse
*/

let list = {
  value: 1,
  next: {
    value: 2,
    next: {
      value: 3,
      next: {
        value: 4,
        next: null
      }
    }
  }
};

const makeReverseList = function(list) {
  if (list.next) {
    makeReverseList(list.next); 
  }

  console.log(list.value);
}

makeReverseList(list);


