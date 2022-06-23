/* Преобразуйте объект в JSON, а затем обратно в обычный объект
https://learn.javascript.ru/task/serialize-object
*/

let user = {
  name: "Василий Иванович",
  age: 35
};

const user2 = JSON.stringify(user);
const user3 = JSON.parse(user2);

//Исключить обратные ссылки https://learn.javascript.ru/task/serialize-event-circular

let room = {
  number: 23
};

let meetup = {
  title: "Совещание",
  occupiedBy: [{name: "Иванов"}, {name: "Петров"}],
  place: room
};

room.occupiedBy = meetup;
meetup.self = meetup;

alert(JSON.stringify(meetup, function replacer(key, value) {
  return (key != "" && value == meetup) ? undefined : value;
}));