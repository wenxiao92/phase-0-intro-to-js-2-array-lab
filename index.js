// Write your solution here!
const cats = ['Milo', 'Otis', 'Garfield'];

function destructivelyAppendCat(anyCat) { //adds anyCat to the end of the array of cats
    return cats.push(anyCat);
}

function destructivelyPrependCat(Bob) { //adds the cat Bob to the beginning of the array
    return cats.unshift(Bob);
}

function destructivelyRemoveLastCat(){ //removes a cat from the array from the end of the array. Does not require a parameter
    return cats.pop();
}

function destructivelyRemoveFirstCat() { //removes a cat from the array from the beginning of the array. Does not require a parameter
    return cats.shift();
}


function appendCat(Broom) {
    var newArray = cats.slice(); //Takes the old array and assign it to the new array called newArray
    newArray.push(Broom) //Pushes the cat 'Broom; to the end of the new array
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