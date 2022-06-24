// Считаем потомков https://learn.javascript.ru/task/tree-info

const animals = document.querySelectorAll('li');

animals.forEach((animal) => {
  let title = animal.firstChild.data;
  const countChild = animal.getElementsByTagName('li').length;

  title = title.trim();

  console.log(title + ': ' + countChild);
})