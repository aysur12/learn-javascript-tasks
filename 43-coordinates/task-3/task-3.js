/* Покажите заметку около элемента (абсолютное позиционирование)
https://learn.javascript.ru/task/position-at-absolute
*/

const getCoords = function(elem) {
  const box = elem.getBoundingClientRect();

  return {
    top: box.top + pageYOffset,
    left: box.left + pageXOffset
  };
}

const positionAt = function(anchor, position, elem) {

  const anchorCoordinates = getCoords(anchor);

  switch (position) {
    case "top":
      elem.style.left = anchorCoordinates.left + "px";
      elem.style.top = anchorCoordinates.top - elem.offsetHeight + "px";
      break;

    case "right":
      elem.style.left = anchorCoordinates.left + anchor.offsetWidth + "px";
      elem.style.top = anchorCoordinates.top + "px";
      break;

    case "bottom":
      elem.style.left = anchorCoordinates.left + "px";
      elem.style.top = anchorCoordinates.top + anchor.offsetHeight + "px";
      break;
  }

}

const showNote = function(anchor, position, html) {

  const noteBlock = document.createElement('div');
  noteBlock.className = "note-block";
  noteBlock.innerHTML = html;
  document.body.append(noteBlock);

  positionAt(anchor, position, noteBlock);
}

const blockquote = document.querySelector('blockquote');

showNote(blockquote, "top", "note-block above");
showNote(blockquote, "right", "note-block at the right");
showNote(blockquote, "bottom", "note-block below");