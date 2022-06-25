// Сортировка таблицы https://learn.javascript.ru/task/sort-table

const table = document.querySelector('.table');

const rowsArr = Array.from(table.rows);
const rowsArrWithoutTitle = rowsArr.slice(1);
const sortedRowsArr = rowsArrWithoutTitle.sort(
  (rowA, rowB) => rowA.cells[0].innerHTML > rowB.cells[0].innerHTML ? 1 : -1
);

table.tBodies[0].append(...sortedRowsArr);