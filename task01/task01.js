// assignment 01

function sayHello(theName, theGender) {
  if (theGender == "Female") {
    console.log(`Hello Miss ${theName}`);
  } else if (theGender == "Male") {
    console.log(`Hello Mr ${theName}`);
  } else {
    console.log(`Hello ${theName}`);
  }
}

// Needed Output
sayHello("Osama", "Male"); // "Hello Mr Osama"
sayHello("Eman", "Female"); // "Hello Miss Eman"
sayHello("Sameh"); // "Hello Sameh"

console.log(
  "------------------------------------------------------------------------"
);

//assignment 02

function calculate(firstNum, secondNum, operation) {
  if (secondNum === undefined) {
    console.log("Second Number Not Found");
  } else {
    if (operation == "add") {
      console.log(firstNum + secondNum);
    } else if (operation == "subtract") {
      console.log(firstNum - secondNum);
    } else if (operation == "multiply") {
      console.log(firstNum * secondNum);
    } else {
      console.log(firstNum + secondNum);
    }
  }
}

// Needed Output
calculate(20); // Second Number Not Found
calculate(20, 30); // 50
calculate(20, 30, "add"); // 50
calculate(20, 30, "subtract"); // -10
calculate(20, 30, "multiply"); // 600

console.log(
  "------------------------------------------------------------------------"
);

//assignment 03

function ageInTime(theAge) {
  if (theAge >= 10 && theAge <= 100) {
    let Months = theAge * 12;
    let weeks = theAge * 52;
    let days = theAge * 365;
    let hours = days * 24;
    let mins = hours * 60;
    let seconds = mins * 60;

    console.log(`${theAge} years`);
    console.log(`${Months} months`);
    console.log(`${weeks} weeks`);
    console.log(`${days} days`);
    console.log(`${hours} hours`);
    console.log(`${mins} minutes`);
    console.log(`${seconds} seconds`);
  } else {
    console.log("Age Out Of Range");
  }
}

// Needed Output
ageInTime(110); // Age Out Of Range
ageInTime(38); // Months Example => 456 Months

console.log(
  "------------------------------------------------------------------------"
);

//assignment 05

function createSelectBox(startYear, endYear) {
  document.write(`<select>`);
  for (let i = startYear; i <= endYear; i++) {
    document.write(`<option value="${i}"> ${i} </option>`);
  }
  document.write(`</select>`);
}
createSelectBox(2000, 2021);

//assignment 06

function multiply(...nums) {
  let result = 1;
  for (let i = 0; i < nums.length; i++) {
    if (typeof nums[i] == "string") {
      continue;
    } else if (typeof nums[i] == "number") {
      if (!Number.isInteger(nums[i])) {
        nums[i] = Math.floor(nums[i]);
      }
      result *= nums[i];
    }
  }
  console.log(result);
}

multiply(10, 20); // 200
multiply("A", 10, 30); // 300
multiply(100.5, 10, "B"); // 1000
