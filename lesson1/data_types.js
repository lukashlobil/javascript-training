var pole = [0, 1, 2];

var pocitac = {
	name: 'pocitac',
	cpu: 8,
	ram: '16GB',
	games: [
		{genre: 'platformer', name: 'Commander Keen', rating: 8},
		{genre: 'platformer', name: 'Ori nad the Blind Forest', rating: 9},
		{genre: 'arcade', name: 'PacMan', rating: 9},
		{genre: 'strategy', rating: 2},
		{genre: 'FPS', name: 'Wolfenstein 3D', rating: 7},
		{genre: 'FPS', name: 'Call of Duty', rating: 1},
		{genre: 'strategy', name: 'Age of Empires', rating: 2},
		{genre: 'FPS', name: 'Wolfenstein 3D', rating: 7},
		{genre: 'FPS', name: 'Call of Duty', rating: 1}
	],
	manufacturer: {name: 'Lenovo', model: 'Y700'}
};

var i;

var fromUser = [
	{genre: 'FPS', name: 'DOOM', rating: 9},
	{genre: 'Strategy', name: 'Starcraft', rating: 9}
];

for (i = 0; i < pole.length; i = i + 1) {
	console.log(pole[i]);
}
// 0 1 2

for (i = 0; i < pole.length; i = i + 1) {
	console.log(pole[i + 1]);
}
// 1 2 3

for (i = pole.length; i >= 0; i--) {
	console.log(pole[i]);
}
// 2 1 0

for (i = 0; i < fromUser.length; i++) {
	console.log(fromUser[i]);
	fromUser[i] = pocitac.games;

}

for (i = 0; i < fromUser.length; i++) {
	var lastIndex = pocitac.games.length;
	pocitac.games[lastIndex] = fromUser[i];
	console.log(lastIndex + fromUser[i].name);
}