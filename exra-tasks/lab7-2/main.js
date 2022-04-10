/* eslint-disable no-use-before-define */
/* eslint-disable no-undef */
/* eslint-disable no-plusplus */

const cellArray = ['0', 'e', 'e', 'e', 'e', 'e', 'e', 'e', 'e'];

const cells = document.querySelector('.column');
const newGameButton = document.querySelector('.new-game');
const label = document.querySelector('.label');

function cross(event) {
  const cell = event.target.closest('.cell');
  const cellId = +cell.dataset.id;
  if (cellArray[cellId] === 'e') {
    cell.querySelector('.cross').classList.remove('hidden');
    cellArray[cellId] = 'x';
    if (isWin('x')) {
      label.textContent = 'You win';
      cells.removeEventListener('click', cross);
    } else {
      circle();
    }
  }
}

function circle() {
  let count = 0;
  let isDone = false;
  while (!isDone && count <= 8) {
    if (cellArray[count] === 'e') {
      cellArray[count] = '0';
      const currentCell = cells.querySelector(`#cell${count}`);
      currentCell.querySelector('.circle').classList.remove('hidden');
      isDone = true;
      break;
    }
    ++count;
  }
  if (isDone) {
    label.textContent = 'Your turn';
    if (isWin('0')) {
      label.textContent = 'You lose';
      cells.removeEventListener('click', cross);
    }
  } else {
    label.textContent = 'Draw';
  }
}

function newGame() {
  cellArray.fill('e');
  label.textContent = 'Lets play';
  for (let i = 0; i < 9; ++i) {
    const currentCell = cells.querySelector(`#cell${i}`);
    const currentCross = currentCell.querySelector('.cross');
    const currentCircle = currentCell.querySelector('.circle');

    currentCross.classList.add('hidden');
    currentCircle.classList.add('hidden');
  }
  cells.addEventListener('click', cross);
}

function isWin(e) {
  let isElementWin = false;
  if ((cellArray[0] === e && cellArray[1] === e && cellArray[2] === e)
      || (cellArray[3] === e && cellArray[4] === e && cellArray[5] === e)
      || (cellArray[6] === e && cellArray[7] === e && cellArray[8] === e)
      || (cellArray[0] === e && cellArray[3] === e && cellArray[6] === e)
      || (cellArray[1] === e && cellArray[4] === e && cellArray[7] === e)
      || (cellArray[2] === e && cellArray[5] === e && cellArray[8] === e)
      || (cellArray[0] === e && cellArray[4] === e && cellArray[8] === e)
      || (cellArray[2] === e && cellArray[4] === e && cellArray[6] === e)) {
    isElementWin = true;
  }
  return isElementWin;
}

newGameButton.addEventListener('click', newGame);

newGame();
