// Создайте список https://learn.javascript.ru/task/create-list

const ul = document.createElement('ul');
document.body.append(ul);

while (true) {
  let value = prompt("Введите текст для элемента списка", "");

  if (!value) {
    break;
  }

  let li = document.createElement('li');
  li.textContent = value;
  ul.append(li);
}

