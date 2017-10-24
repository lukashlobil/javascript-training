document.addEventListener("DOMContentLoaded", function () {
    setTimeout(ready(), 500);
    setTimeout(worst(), 500);
});

var games = [
    {genre: "platformer", name: "Commander Keen", rating: 6},
    {genre: "platformer", name: "Ori nad the Blind Forest", rating: 9},
    {genre: "arcade", name: "PacMan", rating: 9},
    {genre: "strategy", name: 'Starcraft', rating: 9},
    {genre: "FPS", name: "Wolfenstein 3D", rating: 7},
    {genre: "FPS", name: "Call of Duty", rating: 1},
    {genre: "strategy", name: "Age of Empires", rating: 2}
];

function send() {
    var myName, myRating, myGenre, game;
    myName = document.getElementById('c_name').value;
    myRating = document.getElementById('c_rating').value;
    myGenre = document.getElementById('c_genre').value;
    game = {genre: myGenre, name: myName, rating: myRating};
    games.push(game); // = games[games.length+1] = game;
    create(game);
}

function create(myGame) {
    var list = document.getElementById('v_list');
    var listItem = document.createElement('li');
    var text = document.createTextNode(myGame.name + ', ' + myGame.genre + ', ' + myGame.rating);
    listItem.appendChild(text);
    list.appendChild(listItem);
}

function ready() {
    for (var i = 0; i < games.length; i++) {
        create(games[i]);
    }
}

function worst() {
    var worstGameEver;
    var worst = document.getElementById('worst');
    var worstText = document.createElement('p');
    for (var i = 0; i < games.length; i++) {
        if (i < games.length-1) {
            if (games[i].rating < games[i + 1].rating) worstGameEver = games[i];
        }
    }
    console.log(worstGameEver);
    var worstGame = document.createTextNode(worstGameEver.name + ', ' + worstGameEver.genre + ', ' + worstGameEver.rating);
    worstText.appendChild(worstGame);
    worst.appendChild(worstText);

}