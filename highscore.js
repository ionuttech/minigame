const button = document.querySelector('.game-button');
button.addEventListener('click', function() {
	const name = document.querySelector('.score-input').value;
	console.log(name);
	if (name.length == 6) {
		window.location = 'game.html?name=' + name;
	}
});

//Write your code here
