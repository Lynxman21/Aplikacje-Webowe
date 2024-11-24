const canvas = document.getElementById('container');
const ctx = canvas.getContext('2d');

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

const backgroundImage = new Image();
backgroundImage.src = './images/board-bg.jpg';

const fullHeart = new Image();
fullHeart.src = './images/full_heart.png';

const emptyHeart = new Image();
emptyHeart.src = './images/empty_heart.png';

const crosshair = new Image();
crosshair.src = './images/aim.png';

const zombieSprite = new Image();
zombieSprite.src = './images/walkingdead.png';

let lives = 3;
let score = 0;
let isGameOver = false;

let mouseX = 0;
let mouseY = 0;
let zombies = [];


class Zombie {
    constructor() {
        this.x = canvas.width;
        this.y = Math.random() * (canvas.height - 312);
        this.speed = Math.random() * 2 + 1;
        this.scale = Math.random() * 0.5 + 0.5;
        this.frameWidth = 200;
        this.frameHeight = 312;
        this.totalFrames = 10;
        this.currentFrame = 0;
        this.frameDelay = 100;
        this.lastFrameTime = Date.now();
    }

    update() {
        this.x -= this.speed;

        const now = Date.now();
        if (now - this.lastFrameTime > this.frameDelay) {
            this.currentFrame = (this.currentFrame + 1) % this.totalFrames;
            this.lastFrameTime = now;
        }
    }

    draw() {
        const spriteX = this.currentFrame * this.frameWidth;
        ctx.drawImage(
            zombieSprite,
            spriteX, 0,
            this.frameWidth, this.frameHeight,
            this.x, this.y,
            this.frameWidth * this.scale, this.frameHeight * this.scale
        );
    }
}

function drawBackground() {
    ctx.drawImage(backgroundImage, 0, 0, canvas.width, canvas.height);
}

function drawHeart() {
    const heartSize = 50;
    const spacing = 10;

    for (let i = 0; i < 3; i++) {
        if (i < lives) {
            ctx.drawImage(fullHeart, 10 + (heartSize + spacing) * i, 10, heartSize, heartSize);
        } else {
            ctx.drawImage(emptyHeart, 10 + (heartSize + spacing) * i, 10, heartSize, heartSize);
        }
    }
}

function drawAim() {
    const aimSize = 180;
    ctx.drawImage(crosshair, mouseX - aimSize / 2, mouseY - aimSize / 2, aimSize, aimSize);
}

function spawnZombie() {
    const newZombie = new Zombie();
    zombies.push(newZombie);
}

function drawScore() {
    ctx.font = "30px Arial";
    ctx.fillStyle = "white";
    ctx.textAlign = "right";
    ctx.fillText(`Score: ${score}`, canvas.width - 20, 40);
}

function checkHit(x, y) {
    for (let i = zombies.length - 1; i >= 0; i--) {
        const zombie = zombies[i];
        const zombieWidth = zombie.frameWidth * zombie.scale;
        const zombieHeight = zombie.frameHeight * zombie.scale;

        if (
            x >= zombie.x &&
            x <= zombie.x + zombieWidth &&
            y >= zombie.y &&
            y <= zombie.y + zombieHeight
        ) {
            zombies.splice(i, 1);
            score += 20;
            return true;
        }
    }
    score -= 5;
    return false;
}

function drawAndUpdateZombies() {
    for (let i = zombies.length - 1; i >= 0; i--) {
        const zombie = zombies[i];
        zombie.update();
        zombie.draw();

        if (zombie.x + zombie.frameWidth * zombie.scale < 0) {
            zombies.splice(i, 1);
            lives -= 1;
            if (lives <= 0) {
                endGame();
            }
        }
    }
}

function endGame() {
    isGameOver = true;

    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.fillStyle = "rgba(0, 0, 0, 0.8)";
    ctx.fillRect(0, 0, canvas.width, canvas.height);

    ctx.fillStyle = "white";
    ctx.font = "50px Arial";
    ctx.textAlign = "center";
    ctx.fillText("Gra zakończona!", canvas.width / 2, canvas.height / 2 - 50);
    ctx.fillText(`Twój wynik: ${score}`, canvas.width / 2, canvas.height / 2 + 20);

    ctx.fillStyle = "blue";
    ctx.fillRect(canvas.width / 2 - 100, canvas.height / 2 + 70, 200, 50);

    ctx.fillStyle = "white";
    ctx.font = "15px Arial";
    ctx.fillText("Zacznij od nowa", canvas.width / 2, canvas.height / 2 + 100);

    canvas.addEventListener("click", handleRestartClick);
}

function handleRestartClick(event) {
    const rect = canvas.getBoundingClientRect();
    const clickX = event.clientX - rect.left;
    const clickY = event.clientY - rect.top;

    const buttonX = canvas.width / 2 - 100;
    const buttonY = canvas.height / 2 + 70;
    const buttonWidth = 200;
    const buttonHeight = 50;

    if (
        clickX >= buttonX &&
        clickX <= buttonX + buttonWidth &&
        clickY >= buttonY &&
        clickY <= buttonY + buttonHeight
    ) {
        restartGame();
    }
}

function restartGame() {
    canvas.removeEventListener("click", handleRestartClick);

    lives = 3;
    score = 0;
    zombies = [];
    isGameOver = false;

    // Restart gry
    gameLoop();
}

function drawScene() {
    if (isGameOver) return;

    ctx.clearRect(0, 0, canvas.width, canvas.height);
    drawBackground();
    drawHeart();
    drawAndUpdateZombies();
    drawAim();
    drawScore();
}

canvas.addEventListener('mousemove', (event) => {
    const rect = canvas.getBoundingClientRect();
    mouseX = event.clientX - rect.left;
    mouseY = event.clientY - rect.top;
});

window.addEventListener('resize', () => {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    drawScene();
});

canvas.addEventListener('click', (event) => {
    const rect = canvas.getBoundingClientRect();
    const clickX = event.clientX - rect.left;
    const clickY = event.clientY - rect.top;

    checkHit(clickX, clickY);
});

function gameLoop() {
    if (!isGameOver) {
        drawScene();
        requestAnimationFrame(gameLoop);
    }
}

setInterval(() => {
    if (!isGameOver) spawnZombie();
}, 2000);

gameLoop();
