var pole = [0, 1, 2];
for (var i = 0; i < pole.length; i = i + 1) {
    console.log(pole[i]);
}
// 0 1 2

for (var i = 0; i < pole.length; i = i + 1) {
    console.log(pole[i + 1]);
}
// 1 2 3

for (var i = pole.length; i >= 0; i--) {
    console.log(pole[i]);
}
// 2 1 0

for (var i = 0; i < fromUser.length; i++) {
    console.log(fromUser[i]);
    fromUser[i] = pocitac.games

}

for (var i = 0; i < fromUser.length; i++) {
    var lastIndex = pocitac.games.length;
    pocitac.games[lastIndex] = fromUser[i];
    console.log(lastIndex + fromUser[i].name);
}


var pocitac = {
    name: "pocitac",
    cpu: 8,
    ram: "16GB",
    games: [
        {genre: "Platformer", name: "Commander Keen", rating: 8},
        {genre: "Platformer", name: "Ori nad the Blind Forest", rating: 9},
        {genre: "Aracade", name: "PacMan", rating: 9},
        {genre: "Strategy", rating: 2},
        {genre: "FPS", name: "Wolfenstein 3D", rating: 7},
        {genre: "FPS", name: "Call of Duty", rating: 1},
        {genre: "Strategy", name: "Age of Empires", rating: 2}, {genre: "FPS", name: "Wolfenstein 3D", rating: 7},
        {genre: "FPS", name: "Call of Duty", rating: 1}],
    manufacturer: {name: "Lenovo", model: "Y700"}
};
