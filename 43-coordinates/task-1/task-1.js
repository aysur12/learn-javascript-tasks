/* Найдите координаты точек относительно окна браузера
https://learn.javascript.ru/task/find-point-coordinates
*/

const coordinates = elem.getBoundingClientRect();

const upperLeftOuterCorner = [coords.left, coords.top];
const lowerRightOuterCorner = [coords.right, coords.bottom];
const upperLeftInnerCorner = [coords.left + field.clientLeft, coords.top + field.clientTop];
const lowerRightInnerCorner = [
  coords.left + elem.clientLeft + elem.clientWidth,
  coords.top + elem.clientTop + elem.clientHeight
];