//assignment 01

function getDetails(zName, zAge, zCountry) {
  function namePattern(zName) {
    let newName = zName.split(" ");
    return `${newName[0]} ${newName[1][0].toUpperCase()}.`;
    // Osama Mohamed => Osama M.
    // Ahmed ali => Ahmed A.
  }
  function ageWithMessage(zAge) {
    let words = zAge.split(" ");
    let age = Number(words[0]);
    return `Your Age Is ${age}`;
    // 38 Is My Age => Your Age Is 38
    // 32 Is The Age => Your Age Is 32
  }
  function countryTwoLetters(zCountry) {
    let country = zCountry.split(" ");
    return `You Live In ${country[0][0].toUpperCase()}${country[0][1].toUpperCase()}`;
    // Egypt => You Live In EG
    // Syria => You Live In SY
  }
  function fullDetails() {
    return `Hello ${namePattern(zName)}, ${ageWithMessage(
      zAge
    )}, ${countryTwoLetters(zCountry)}`;
  }
  return fullDetails(); // Do Not Edit This
}

console.log(getDetails("Osama Mohamed", "38 Is My Age", "Egypt"));
// Hello Osama M., Your Age Is 38, You Live In EG

console.log(getDetails("Ahmed ali", "32 Is The Age", "Syria"));
// Hello Ahmed A., Your Age Is 32, You Live In SY

console.log(
  "------------------------------------------------------------------------"
);

//assignment 02

let itsMe = () => `Iam A Normal Function`;
console.log(itsMe()); // Iam A Normal Function

let urlCreate = (protocol, web, tld) => `${protocol}://www.${web}.${tld}`;
console.log(urlCreate("https", "elzero", "org")); // https://www.elzero.org

console.log(
  "------------------------------------------------------------------------"
);

//assignment 03

let checker = (zName) => (status) => (salary) =>
  status === "Available"
    ? `${zName}, My Salary Is ${salary}`
    : `Iam Not Avaialble`;

console.log(checker("Osama")("Available")(4000)); // Osama, My Salary Is 4000
console.log(checker("Ahmed")("Not Available")()); // Iam Not Avaialble

console.log(
  "------------------------------------------------------------------------"
);

//assignment 04
function specialMix(...data) {
  let sum = 0;
  for (let i = 0; i < data.length; i++) {
    let num = parseInt(data[i]);
    if (!isNaN(num)) {
      sum += num;
    }
  }
  if (sum === 0) {
    return "All Is Strings";
  } else {
    return sum;
  }
}

console.log(specialMix(10, 20, 30)); // 60
console.log(specialMix("10Test", "Testing", "20Cool")); // 30
console.log(specialMix("Testing", "10Testing", "40Cool")); // 50
console.log(specialMix("Test", "Cool", "Test")); // All Is Strings

