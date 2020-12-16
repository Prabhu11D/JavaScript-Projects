// Elements
const board = document.querySelector(".board");
const cells = document.querySelectorAll(".cell");
const result = document.querySelector(".result");
const message = document.querySelector(".message");
const restart = document.querySelector(".restart");

// CONSTANTS
const X = "x";
const CIRCLE = "circle";
const WINNING_COMBINATIONS = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
];

// Variable
let circleClass;
let currentClass;

restart.addEventListener("click", startGame);

function startGame() {
    circleClass = false;
    currentClass = circleClass ? CIRCLE : X;
    cells.forEach((cell) => {
        cell.classList.remove(X);
        cell.classList.remove(CIRCLE);
        cell.removeEventListener("click", handleCell);
        cell.addEventListener("click", handleCell, { once: true });
    });
    setBoardHover();
    result.classList.remove("show");
}

function handleCell(e) {
    cell = e.target;
    cell.classList.add(currentClass);
    if (checkWin(currentClass)) {
        endGame(false);
    } else if (isDraw()) {
        endGame(true);
    } else {
        swapClass();
        setBoardHover();
    }
}

function swapClass() {
    circleClass = !circleClass;
    currentClass = circleClass ? CIRCLE : X;
}
function setBoardHover() {
    board.classList.remove(X);
    board.classList.remove(CIRCLE);
    board.classList.add(currentClass);
}
function checkWin(currentClass) {
    return WINNING_COMBINATIONS.some((combination) => {
        return combination.every((index) => {
            return cells[index].classList.contains(currentClass);
        });
    });
}
function endGame(draw) {
    if (draw) {
        message.innerText = "Draw!";
    } else {
        message.innerText = `${circleClass ? "O's" : "X's"} Wins!`;
    }
    result.classList.add("show");
}

function isDraw() {
    return [...cells].every((cell) => {
        return cell.classList.contains(X) || cell.classList.contains(CIRCLE);
    });
}

startGame();
