let player = 'X';
let cells = document.getElementsByClassName('tile');
let playing = true;
let x;
let board = ['', '', '', '', '', '', '', '', ''];
let tH, mH, bH, lV, mV, rV, rD, lD, winCases, wins;
let count = 0;

Array.from(cells).forEach((cell) =>
  cell.addEventListener('click', handleClick, { once: true })
);

function rever(evt, [x]) {
  evt.target.innerHTML = board[x];
}

function handleClick(evt) {
  if (playing) {
    count++;
    [x] = [evt.target.id[0]];
    board[x] = player;
    if (player == 'X') {
      player = 'O';
      document.getElementById('turn').innerText = `It's ${player} turn`;
    } else {
      player = 'X';
      document.getElementById('turn').innerText = `It's ${player} turn`;
    }
    rever(evt, [x]);
    if (winner()) {
      document
        .querySelector(`.winner${wins}`)
        .classList.remove(`hidden${wins}`);
      playing = false;
    }
    if (count === 9 && winCases !== true) {
      document.querySelector('.tie').classList.remove('hiddenT');
    }
  }
}
function winner() {
  winConditions(board);
  if (player == 'X' && winCases === true) {
    return (wins = 'O');
  } else if (player == 'O' && winCases === true) {
    return (wins = 'X');
  }
}

function winConditions(board) {
  tH = checkCondition(board[0], board[1], board[2]);
  mH = checkCondition(board[3], board[4], board[5]);
  bH = checkCondition(board[6], board[7], board[8]);
  lV = checkCondition(board[0], board[3], board[6]);
  mV = checkCondition(board[1], board[4], board[7]);
  rV = checkCondition(board[2], board[5], board[8]);
  rD = checkCondition(board[0], board[4], board[8]);
  lD = checkCondition(board[2], board[4], board[6]);
  winCases = tH || mH || bH || lV || mV || rV || rD || lD;
}

function checkCondition(a, b, c) {
  if (a !== '' && a === b && b === c) {
    return true;
  }
}

document.querySelector('.button').addEventListener('click', function () {
  location.reload();
});
