// Define the canvas element
const canvas = document.getElementById("gameCanvas");
const ctx = canvas.getContext("2d");

// Define the size of each grid cell
const gridSize = 20;

// Define the initial position of the snake
let snake = [
    { x: 10, y: 10 },
    { x: 9, y: 10 },
    { x: 8, y: 10 }
];

// Define the initial direction of the snake
let direction = "right";

// Main game loop
function gameLoop() {
    // Clear the canvas
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    // Update the snake position
    const head = { x: snake[0].x, y: snake[0].y };
    switch (direction) {
        case "up":
            head.y--;
            break;
        case "down":
            head.y++;
            break;
        case "left":
            head.x--;
            break;
        case "right":
            head.x++;
            break;
    }
    snake.unshift(head);
    snake.pop();

    // Draw the snake
    snake.forEach(segment => {
        ctx.fillStyle = "green";
        ctx.fillRect(segment.x * gridSize, segment.y * gridSize, gridSize, gridSize);
    });

    // Call the game loop again
    requestAnimationFrame(gameLoop);
}

// Start the game loop
gameLoop();