// Форматирование относительной даты https://learn.javascript.ru/task/format-date-relative

const formatDate = function(date) {
  const diffDate = new Date() - date;
  const timeInSeconds = Math.round(diffDate / 1000);
  const timeInMinutes = Math.round(diffDate / 60000);

  if (diffDate < 1000) {
    return 'прямо сейчас';
  }

  if (timeInSeconds < 60) {
    return `${timeInSeconds} сек. назад`;
  }

  if (timeInMinutes < 60) {
    return `${timeInMinutes} мин. назад`;
  }
}


