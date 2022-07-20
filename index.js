// Write your solution here!
const cats = ["Milo", "Otis", "Garfield"];
function destructivelyAppendCat(newCat) {
    cats.push(newCat);
    return cats;
}


function destructivelyPrependCat(newCat) {
    cats.unshift(newCat);
    return cats;
}

function destructivelyRemoveLastCat() {
    cats.pop(0);
    return cats;
}

function destructivelyRemoveFirstCat() {
    cats.shift(cats.length - 1)
    return cats;
}
function appendCat(newCat) {
    return [...cats, newCat]
   
}


function prependCat(newCat) {
   return [newCat,...cats]
}

function removeLastCat() {
    const slicedCats = cats.slice(0,cats.length - 1);
    return slicedCats;
}

function removeFirstCat() {
    const slicedCats = cats.slice(1);
    return slicedCats;
}