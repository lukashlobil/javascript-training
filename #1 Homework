var array = [3, 5, 8, 2, 1, 0, 0, 4]

var a = 0;
var b = array[0];
var c = 0;
var maxd = 0;
var d = array[0];

for (var i = 0; i < array.length; i++) {
    a = array[i] + a; // a = hodnota v poli + a. Po prvni iteraci; a = 3 + 0 -> a = 3. Po druhe iteraci; a = 5 + 3 -> a = 8.

    if (b > array[i]){ // b = hodnota indexu 0, pokud je vetsi nez hodnota v indexu iterace -> b = nova hodnota v indexu
        b = array[i]
    }

    c = array[i] + c; // viz. a

        if (maxd < array[i]) { // d = maxd je 0, pokud je mensi nez hodnota na indexu iterace -> d = index i, maxd = nova hodnota indexu
            d = i;
            maxd = array[i];
        }
}

console.log("a = " + a); // vypise soucet
console.log("b = " + b); // vypise nejnizsi hodnotu ze vsech indexu
console.log("c = " + c / array.length); //  vypis c / pocet iteraci (c = 20 / 8 -> c = 2,5)
console.log("d = " + d); // vypise index, kde je nejvyssi hodnota
