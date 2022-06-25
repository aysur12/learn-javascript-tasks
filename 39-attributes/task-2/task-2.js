// Сделайте внешние ссылки оранжевыми https://learn.javascript.ru/task/yellow-links

const selector = 'a[href*="://"]:not([href^="http://internal.com"])';
const links = document.querySelectorAll(selector);

links.forEach((link) => link.style.color = 'orange');