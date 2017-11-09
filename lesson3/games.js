window.onload = ready;
var iziModalConf = {
	fullscreen: true,
	subtitle: 'subtitle',
	title: 'server error',
	timeout: 10000,
	timeoutProgressbar: true
};

/*var games = [
	{genre: 'platformer', name: 'Commander Keen', rating: 6},
	{genre: 'platformer', name: 'Ori nad the Blind Forest', rating: 9},
	{genre: 'arcade', name: 'PacMan', rating: 9},
	{genre: 'strategy', name: 'Starcraft', rating: 9},
	{genre: 'FPS', name: 'Wolfenstein 3D', rating: 7},
	{genre: 'FPS', name: 'Call of Duty', rating: 1},
	{genre: 'strategy', name: 'Age of Empires', rating: 2}
];*/

var games = [];

/**
 * send a game from html
 */
function send(game) {
	games.push(game); // = games[games.length+1] = game;
	create(game, 'v_list');
}

function validate() {
	var result = true;
	var myName, myRating, myGenre, game;
	myName = document.getElementById('c_name').value;
	myRating = document.getElementById('c_rating').value;
	myGenre = document.getElementById('c_genre').value;
	game = {genre: myGenre, name: myName, rating: myRating};
	if (myName.length > 20 || myName < 2) result = false;
	if (myRating > 10 || myRating < 0) result = false;
	if (result) send(game);
	else {
		$('.header').replaceWith('<h1 class="header">validation failed</h1>');
		$('#modal').iziModal('open');
	}
}

/**
 * Append a game to html
 * @param myGame game instance
 * @param myList string id of html element
 */
function create(myGame, myList) {
	var list = document.getElementById(myList);
	var listItem = document.createElement('li');
	var text = document.createTextNode(myGame.name + ', ' + myGame.genre + ', ' + myGame.rating);
	listItem.appendChild(text);
	list.appendChild(listItem);
}

/**
 * gets called when document is ready
 */
function ready() {
	$('#modal').iziModal(iziModalConf);
	getGames();
	genreList();
}

function populate() {
	for (var i = 0; i < games.length; i++) {
		create(games[i], 'v_list');
	}
}

/**
 * gets games by rating
 */
function genreList() {
	emptyList('v_genre');
	var genre = document.getElementById('f_genre').value;
	for (var i = 0; i < games.length; i++) {
		if (games[i].genre === genre) {
			create(games[i], 'v_genre');
		}
	}
}

/**
 * clears a html ul
 * @param listName string id
 */
function emptyList(listName) {
	var myList = document.getElementById(listName);
	while (myList.hasChildNodes()) {
		myList.removeChild(myList.lastChild);
	}
}

/**
 * gets worst games
 */
function worst(insideCount) {
	emptyList('w_list');
	var count;
	if (insideCount) count = insideCount;
	else count = document.getElementById('s_count').value;
	sort(games, 'rating');
	for (var i = 0; i < count; i++)
		create(games[i], 'w_list');
}

/**
 * sorts an array
 * @param myArray array to sort
 * @param propertyCheck property of array's element by which the array gets sorted
 */
function sort(myArray, propertyCheck) {
	for (var i = 0; i < myArray.length; i++) {
		for (var j = i + 1; j < myArray.length; j++) {
			// game.rating === game['rating']
			// game.propertyCheck !== game['propertyCheck'] -
			// game.propertyCheck is tring to find a property named propertyTocCheck on the object
			// the other syntax is dynamically translating it to a propertyCheck variable value
			if (myArray[j][propertyCheck] < myArray[i][propertyCheck]) swap(i, j, myArray);
		}
	}
}

/**
 * swaps elements in array
 * @param a what to swap
 * @param b with what
 * @param arrayToSwap in what array
 */
function swap(a, b, arrayToSwap) {
	var temp = arrayToSwap[a];
	arrayToSwap[a] = arrayToSwap[b];
	arrayToSwap[b] = temp;
}

function getGames() {
	$.ajax('http://localhost:8000/games')
		.done(function (data) {
			games = data;
			populate();
			worst(0);
			changeClass('active');
		}).fail(function (err) {
			console.log(err);
			$('.header').replaceWith('<h1 class="header">' + err.statusText + '</h1>');
			changeClass('notActive');
			$('#modal').iziModal('open');
		});
}

function changeClass(classToChange) {
	var serverStatus = document.getElementById('server');
	for (var i = 0; i < serverStatus.classList.length; i++) {
		if (serverStatus.classList[i] === 'unknown') {
			serverStatus.classList.add(classToChange);
			serverStatus.classList.remove('unknown');
		}
	}
}