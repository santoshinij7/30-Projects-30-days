const gameContainer = document.querySelector(".game-container");
const snake = document.getElementById("snake");
const food = document.getElementById("food");

let snakeX = 2;
let snakeY = 2;
let snakeLength = 1;
let snakeDirection = "right";
const gridSize = 15;
const tileSize = 20;

let foodX, foodY;

function generateFood() {
    foodX = Math.floor(Math.random() * gridSize);
    foodY = Math.floor(Math.random() * gridSize);
    food.style.left = foodX * tileSize + "px";
    food.style.top = foodY * tileSize + "px";
}

generateFood();

function gameLoop() {
    switch (snakeDirection) {
        case "up":
            snakeY -= 1;
            break;
        case "down":
            snakeY += 1;
            break;
        case "left":
            snakeX -= 1;
            break;
        case "right":
            snakeX += 1;
            break;
    }

    if (snakeX < 0 || snakeX >= gridSize || snakeY < 0 || snakeY >= gridSize) {
        alert("Game Over!");
        location.reload();
    }

    snake.style.left = snakeX * tileSize + "px";
    snake.style.top = snakeY * tileSize + "px";

    if (snakeX === foodX && snakeY === foodY) {
        snakeLength++;
        generateFood();
    }

    if (snakeLength > 1) {
        // Add body segments here if needed
    }

    setTimeout(gameLoop, 200);
}

document.addEventListener("keydown", (event) => {
    switch (event.key) {
        case "ArrowUp":
            snakeDirection = "up";
            break;
        case "ArrowDown":
            snakeDirection = "down";
            break;
        case "ArrowLeft":
            snakeDirection = "left";
            break;
        case "ArrowRight":
            snakeDirection = "right";
            break;
    }
});

gameLoop();
