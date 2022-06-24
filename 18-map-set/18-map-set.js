// Фильтрация уникальных элементов массива https://learn.javascript.ru/task/array-unique-map

function unique(arr) {
  const uniqueSet = new Set(arr);
  const uniqueArr = Array.from(uniqueSet);
  return uniqueArr;
}

let values = ["Hare", "Krishna", "Hare", "Krishna",
  "Krishna", "Krishna", "Hare", "Hare", ":-O"
];

console.log(unique(values));

// Отфильтруйте анаграммы https://learn.javascript.ru/task/filter-anagrams

const aclean = function(arr) {
  let obj = {};

  for (let i = 0; i < arr.length; i++) {
    const sorted = arr[i].toLowerCase().split("").sort().join("");
    obj[sorted] = arr[i];
  }

  return Object.values(obj);
}

let arr = ["nap", "teachers", "cheaters", "PAN", "ear", "era", "hectares"];

console.log(aclean(arr));