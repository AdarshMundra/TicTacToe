const squares = document.querySelectorAll(".square");
const resetButton = document.querySelector("#reset");
let turn = "X";

for (const square of squares) {
  square.addEventListener("click", function() {
    if (square.textContent === "") {
      square.textContent = turn;
      if (checkWin(turn)) {
        alert(turn + " wins!");
        reset();
      } else if (checkDraw()) {
        alert("Draw!");
        reset();
      } else {
        turn = turn === "X" ? "O" : "X";
      }
    }
  });
}

resetButton.addEventListener("click", reset);

function reset() {
  for (const square of squares) {
    square.textContent = "";
  }
  turn = "X";
}

function checkWin(player) {
  if (
    squares[0].textContent === player &&
    squares[1].textContent === player &&
    squares[2].textContent === player
  ) {
    return true;
  } else if (
    squares[3].textContent === player &&
    squares[4].textContent === player &&
    squares[5].textContent === player
  ) {
    return true;
  } else if (
    squares[6].textContent === player &&
    squares[7].textContent === player &&
    squares[8].textContent === player
  ) {
    return true;
  } else if (
    squares[0].textContent === player &&
    squares[3].textContent === player &&
    squares[6].textContent === player
  ) {
    return true;
  } else if (
    squares[1].textContent === player &&
    squares[4].textContent === player &&
    squares[7].textContent === player
  ) {
    return true;
  } else if (
    squares[2].textContent === player &&
    squares[5].textContent === player &&
    squares[8].textContent === player
  ) {
    return true;
  } else if (
    squares[0].textContent === player &&
    squares[4].textContent === player &&
    squares[8].textContent === player
  ) {
    return true;
  } else if (
    squares[2].textContent === player &&
    squares[4].textContent === player &&
    squares[6].textContent === player
  ) {
    return true;
  } else {
    return false;
  }
}

function checkDraw() {
  for (const square of squares) {
    if (square.textContent === "") {
      return false;
    }
  }
  return true;
}
