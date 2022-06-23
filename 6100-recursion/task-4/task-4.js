// Вывод односвязного списка https://learn.javascript.ru/task/output-single-linked-list

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

const printList = function(list) {

  console.log(list.value);

  if (list.next) {
    printList(list.next); 
  }
}

printList(list);