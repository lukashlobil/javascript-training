var games = [
    {genre: "platformer", name: "Commander Keen", rating: 8},
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

}
