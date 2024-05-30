function convertToUpperCase(event) {
  const inputField = event.target;
  inputField.value = inputField.value.toUpperCase();
}

let wordInput = document.querySelector("#SearchInput");
let matrixBox = document.querySelector(".matrix");
let btn = document.querySelector(".btn");

let characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
let Matrix = [];
let row = 5;
let col = 5;
function generate_matrix() {
  for (let i = 0; i < row; i++) {
    Matrix[i] = [];
    for (let j = 0; j < col; j++) {
      Matrix[i][j] = characters[Math.floor(Math.random() * 26)];
    }
  }
}

function enter_data() {
  matrixBox.innerHTML = ""; // Clear previous matrix
  for (let i = 0; i < row; i++) {
    let element = document.createElement("div");
    element.classList.add("row");
    for (let j = 0; j < col; j++) {
      let innerElement = document.createElement("div");
      innerElement.classList.add("cell");
      innerElement.setAttribute("id", `${i}${j}`);
      innerElement.innerHTML = Matrix[i][j];
      element.appendChild(innerElement);
    }
    matrixBox.appendChild(element);
  }
}
generate_matrix();
enter_data();

let inputValue = "";
btn.addEventListener("click", () => {
  getInput();
  wordInput.value = "";
});
function getInput() {
  inputValue = wordInput.value;
  if (inputValue == "") {
    alert("Please enter the word");
  } else {
    resetBoard();
    exist();
  }
}

function resetBoard() {
  check = 0;
  visited = Array.from({ length: row }, () => Array(col).fill(0));
  document.querySelectorAll(".cell").forEach((cell) => {
    cell.classList.remove("highlight");
  });
}

let check = 0;
let visited = Array.from({ length: row }, () => Array(col).fill(0));

function sleep(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

async function solve(r, c, index) {
  if (index == inputValue.length) {
    check = 1;
    return;
  }
  if (r < 0 || c < 0 || r >= row || c >= col) {
    return;
  }
  if (visited[r][c] == 1) {
    return;
  }
  if (Matrix[r][c] == inputValue[index]) {
    let str = `${r}${c}`;
    let temp = document.getElementById(str);
    temp.classList.add("highlight");
    visited[r][c] = 1;

    await sleep(500); // 500 milliseconds delay

    await solve(r, c + 1, index + 1); // right call
    await solve(r + 1, c, index + 1); // down call
    await solve(r, c - 1, index + 1); // left call
    await solve(r - 1, c, index + 1); // up call

    if (check == 0) {
      // If not found, revert changes
      temp.classList.remove("highlight");
      visited[r][c] = 0;
    }
  }
}

async function exist() {
  let index = 0;
  for (let r = 0; r < row; r++) {
    for (let c = 0; c < col; c++) {
      await solve(r, c, index);
      if (check == 1) {
        return true;
      }
    }
  }
  return false;
}
