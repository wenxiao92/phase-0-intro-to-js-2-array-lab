// Write your solution here!
const cats = ['Milo', 'Otis', 'Garfield'];

function destructivelyAppendCat(Ralph) {
    return cats.push(Ralph);
}

function destructivelyPrependCat(Bob) {
    return cats.unshift(Bob);
}

function destructivelyRemoveLastCat(Garfield){
    return cats.pop();
}

function destructivelyRemoveFirstCat(Milo) {
    return cats.shift();
}

function appendCat(Broom) {
    var newArray = cats.slice();
    newArray.push(Broom)
    return newArray;
}

function prependCat(Arnold) {
    var newArray = cats.slice();
    newArray.unshift(Arnold)
    return newArray;
}

function removeLastCat() {
    var newArray = cats.slice();
    newArray.pop()
    return newArray;
}

function removeFirstCat() {
    var newArray = cats.slice();
    newArray.shift()
    return newArray;
}