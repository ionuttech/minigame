let ball = {
	x: 0,
	y: 0,
	dirX: 1,
	dirY: -1,
	speedX: 10,
	speedY: 10,
	radius: 20,
	fill: '#ffffff',
};

let player = {
	size: 100,
	x: 300,
	y: 750,
	fill: '#ffffff',
};

let score = 0;
function setup() {
	createCanvas(600, 800);
	ball.x = width / 2;
	ball.y = height / 2;
}

function draw() {
	background(25, 25, 25);
	fill(ball.fill);
	if (ball.x > width - ball.radius / 2) {
		ball.dirX = -1;
	} else if (ball.x < ball.radius / 2) {
		ball.dirX = 1;
	}
	if (ball.y > height - ball.radius / 2) {
		ball.x = width / 2;
		ball.y = height / 2;
		ball.speedX = 0;
		ball.speedY = 0;
	} else if (ball.y < ball.radius / 2) {
		ball.dirY = 1;
	}
	textSize(32);
	text('SCORE: ' + score, width - 200, 50);
	ball.x = ball.x + ball.dirX * ball.speedX;
	ball.y = ball.y + ball.dirY * ball.speedY;
	ellipse(ball.x, ball.y, ball.radius, ball.radius);

	//Player
	if (ball.x > player.x && ball.x < player.x + player.size && ball.y + ball.radius / 2 > player.y) {
		ball.dirY = -1;
		ball.speedX += 1;
		ball.speedY += 1;
		score++;
		console.log(score);
		if (player.size > 20) {
			player.size -= 2;
		}
	}
	if (player.x + player.size < width) {
		player.x = mouseX - player.size / 2;
	} else {
		player.x = mouseX;
	}
	rect(player.x, player.y, player.size, 20);

	//Death zone
	fill(255, 0, 0);
	rect(0, 760, 600, 40);
}
