console.log("Excercise-1.1");
let myAlphabet = ['A', 'B', 'C', 'D', 'E', 'F', 'G'];
console.log(myAlphabet.length);

console.log("Exercise-1.2");
let planets = ["Earth", "Venus", "Mars", "Saturn", "Uranus"];
planets.forEach(function(names, index) {
    console.log(names, "[Index",index,"]");
});

console.log("Exercise-1.3");
let myArr = [1, 2, "One", true];
myArr.forEach(function(members){
    console.log(members)
});
