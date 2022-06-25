// Создайте дерево из объекта https://learn.javascript.ru/task/create-object-tree

let data = {
  "Рыбы": {
    "форель": {},
    "лосось": {}
  },

  "Деревья": {
    "Огромные": {
      "секвойя": {},
      "дуб": {}
    },
    "Цветковые": {
      "яблоня": {},
      "магнолия": {}
    }
  }
};

const createTree = function(container, obj) {
  container.append(createTreeDom(obj));
}

const createTreeDom = function(obj) {
  if (!Object.keys(obj).length) return;

  const ul = document.createElement('ul');

  for (let key in obj) {
    const li = document.createElement('li');
    li.innerHTML = key;

    const ulChildren = createTreeDom(obj[key]);
    if (ulChildren) {
      li.append(ulChildren);
    }

    ul.append(li);
  }

  return ul;
}

let container = document.getElementById('container');
createTree(container, data);