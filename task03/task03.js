//assignment 01
let mix = [1, 2, 3, "E", 4, "l", "z", "e", "r", 5, "o"]; // Elzero

let fun1 = mix
  .map(function (Element) {
    return typeof Element === "string" ? Element : "";
  })
  .reduce(function (acc, current) {
    return acc + current;
  });

console.log(fun1);

//assignment 02

let myString = "EElllzzzzzzzeroo";

let fun2 = myString
  .split("")
  .filter(function (Element, index, array) {
    return array.indexOf(Element) === index;
  })
  .join("");

console.log(fun2);

//assignment 03

let myArray = ["E", "l", "z", ["e", "r"], "o"];

let fun3 = myArray
  .reduce(function (acc, current, array) {
    return acc.concat(Array.isArray(current) ? current : [current]);
  }, [])
  .join("");

console.log(fun3);

//assignment 04
let numsAndStrings = [1, 10, -10, -20, 5, "A", 3, "B", "C"]; // [-1, -10, 10, 20, -5, -3]

let fun4 = numsAndStrings.filter(function(Element){
    return typeof Element !== "string"
}).map(function(ele){
    return -ele;
}).join(" ")

console.log(fun4);

