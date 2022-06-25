// Создать уведомление https://learn.javascript.ru/task/create-notification

const showNotification = function({top, right, html, className}) {

  const notification = document.createElement('div');
  notification.className = "notification";

  notification.style.top = top + 'px';
  notification.style.right = right + 'px';
  notification.innerHTML = html;
  document.body.append(notification);

  setTimeout(() => notification.remove(), 1500);
}

let i = 1;
setInterval(() => {
  showNotification({
    top: 10,
    right: 10,
    html: 'Hello ' + i++,
    className: "welcome"
  });
}, 2000);