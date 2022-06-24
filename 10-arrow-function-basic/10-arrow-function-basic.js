// Перепишите с использованием функции-стрелки https://learn.javascript.ru/task/rewrite-arrow
function ask(question, yes, no) {
  if (confirm(question)) yes()
  else no();
}

ask(
  "Вы согласны?",
  () => alert("Вы согласились."),
  () => alert("Вы отменили выполнение.")
);



