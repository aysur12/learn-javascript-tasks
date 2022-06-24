// Выделите ячейки по диагонали https://learn.javascript.ru/task/select-diagonal-cells

const table = document.body.children[0];

for(let i = 0; i < table.rows.length; i++) {
  let rowTable = table.rows[i];
  rowTable.cells[i].style.backgroundColor = 'red';
}