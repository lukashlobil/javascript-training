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

// Ondrej - vypisky
/*
zalezi na implentaci na kazdem browseru (jak bude js zobrazovat pro uzivatele)
drive se psalo nekolik druhu kodu, ted jiz neni potreba

oficialni vyraz je EkmaScript
	oficialni je es.6 (= ekma script 6)
	
objekty
	dom (document object model - z ceho se stranka hierarchicky sklada - head, body)
	jquery = knihovna obsahujci zlehcovadla (aby se nemuselo psat vse rucne, velka manipulace s dom0)
		uz se nepouziva
		good practice je oddelovat HTML a DOM (nektere frameworky na toto maji dependency)
		
		PR. document.getElementById('readme') - objekt.metoda('hodnota parametr')
		
var = variable (= promenna)
var a;
a = 1;
var b = 2;
b = 2;
a + b;

stringy maji vzdy 'ahoj' (uvozovky)

Stahnout Visual Studio Code - opensource - editor pro js.

js je jedno, jakeho je var typu.

datove typy
	casto pouzitelne
		numeric
		boolean
		string
		array
		object
	mene pouzitelne
		null
		undefined
	
function = ucelene bloky kodu, ktery plni urcity ucel

function nasob (parametry){code}

return = vrati vysledek zpet

parametru je mozne mit 0 az n

NaN - Not a Number - vznikne pri nasobeni stringu a cisla

array = kolekce hodnot

var pole = [1, 2, 3];
index 0 = 1
index 1 = 2
index 2 = 3

primitivni hodnoty - numeric, string, boolean
komplexni hodnoty = object, array

primitivni hodnoty - maji hodnotu, pevne danou (ta neni externe editovatelna). Kdyz jsou vlozeny do pameti, tak vedi presne, kde jsou v pameti - proto je hodnota staticka. Vypocetne i pametove jednoduche.
omplexni hodnoty - maji pointer (odkaz na alokanovanou odnotu v pameti, lze ji pomoci pointru editovat). Protoze, kdyz se ukladaji do pameti, mohou dynamicky rust do n. Proto se do pameti ulozi pouze pointer, nikoli cela hodnota.

a = "a"
"a"
b = "b"
"b"
c = "c"
"c"

a = b
"b"

b = c
"c"

a
"b" 

pro kazdy prvek v poli = iterace (je nekolik typu iterace)

for = iterace

var pole = [0,1,2,3,4,5,6,7];
for (var i = 0; 1 < pole.lenght i = i +1) {
	// do something
	}

// 

i++ = (i=i+1) ; i-- (opak)

json = js object notation = standard zapisu objektu v js + slozene dvojite uvozovky

var object = {} 
{}

object = komplexni hodnota (ma, pointer)

klic - jmeno - uvnitr

var object = {name: 'pocitac',	cpu: '8',	ram: '16g',	games: ['keen4','pacman','bulanci']};

object.cpu (object property) - moznost, jak se dostat k hodnote property

vsechny datove typy mohou byt property

objetc.manufacturer
undefined

object.manufacturer = [name: 'Lenovo',	model = 'y700']

var keen4 

object.games = 
*/
