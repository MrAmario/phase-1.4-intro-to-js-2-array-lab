// Write your solution here!



let cats=["Milo", "Otis", "Garfield"];

function destructivelyAppendCat(Ralph){
    cats.push(Ralph)
}

function destructivelyPrependCat(Bob){
    cats.unshift(Bob);
}
function destructivelyRemoveLastCat(){
    cats.pop();
}
function destructivelyRemoveFirstCat(){
    cats.shift();
}
function appendCat(Broom){
    let newList=[...cats, "Broom"];
    return newList;
}
function prependCat(Arnold){
    let cats2=["Arnold"].concat(cats);
    return cats2;
}
function removeLastCat(){
    let lastRemove= cats.slice(0, -1);
    return lastRemove;
}
function removeFirstCat(){
    let firstRemove=cats.slice(1);
    return firstRemove;
}