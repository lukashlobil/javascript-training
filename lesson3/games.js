window.onload = ready;

var games = [
	{genre: 'platformer', name: 'Commander Keen', rating: 6},
	{genre: 'platformer', name: 'Ori nad the Blind Forest', rating: 9},
	{genre: 'arcade', name: 'PacMan', rating: 9},
	{genre: 'strategy', name: 'Starcraft', rating: 9},
	{genre: 'FPS', name: 'Wolfenstein 3D', rating: 7},
	{genre: 'FPS', name: 'Call of Duty', rating: 1},
	{genre: 'strategy', name: 'Age of Empires', rating: 2}
];

/**
 * send a game from html
 */
function send() {
	var myName, myRating, myGenre, game;
	myName = document.getElementById('c_name').value;
	myRating = document.getElementById('c_rating').value;
	myGenre = document.getElementById('c_genre').value;
	game = {genre: myGenre, name: myName, rating: myRating};
	games.push(game); // = games[games.length+1] = game;
	create(game, 'v_list');
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
	for (var i = 0; i < games.length; i++) {
		create(games[i], 'v_list');
	}
	worst(0);
	genreList();
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