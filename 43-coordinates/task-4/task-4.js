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

const showNote = function(anchor, position, html) {
  const noteBlock = document.createElement('div');
  noteBlock.className = "note-block";
  noteBlock.innerHTML = html;
  document.body.append(noteBlock);

  positionAt(anchor, position, noteBlock);
}

const positionAt = function(anchor, position, elem) {

  const anchorCoordinates = getCoords(anchor);

  switch (position) {
    case "top-out":
      elem.style.left = anchorCoordinates.left + "px";
      elem.style.top = anchorCoordinates.top - elem.offsetHeight + "px";
      break;

    case "right-out":
      elem.style.left = anchorCoordinates.left + anchor.offsetWidth + "px";
      elem.style.top = anchorCoordinates.top + "px";
      break;

    case "bottom-out":
      elem.style.left = anchorCoordinates.left + "px";
      elem.style.top = anchorCoordinates.top + anchor.offsetHeight + "px";
      break;

    case "top-in":
      elem.style.left = anchorCoordinates.left + "px";
      elem.style.top = anchorCoordinates.top + "px";
      break;

    case "right-in":
      elem.style.width = '150px';
      elem.style.left = anchorCoordinates.left + anchor.offsetWidth - elem.offsetWidth + "px";
      elem.style.top = anchorCoordinates.top + "px";
      break;

    case "bottom-in":
      elem.style.left = anchorCoordinates.left + "px";
      elem.style.top = anchorCoordinates.top + anchor.offsetHeight - elem.offsetHeight + "px";
      break;
  }

}

const blockquote = document.querySelector('blockquote');

showNote(blockquote, "top-in", "note-block top-in");
showNote(blockquote, "top-out", "note-block top-out");
showNote(blockquote, "right-out", "note-block right-out");
showNote(blockquote, "bottom-in", "note-block bottom-in");