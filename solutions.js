console.log("----------------------------Q1---------------------");

function sumIntFrom1ToN(a) {
  let result = 0;
  for (let i = 0; i <= a; i++) {
    result += i;
  }
  console.log(result);
}

sumIntFrom1ToN(600);

console.log("----------------------------Q2---------------------");

function sumOfCubes(a, b, c) {
  let result = 0;

  if (typeof a == "number") {
    result += a ** 3;
    // console.log(result);
  }

  if (typeof b == "number") {
    result += b ** 3;
    // console.log(result);
  }

  if (typeof c == "number") {
    result += c ** 3;
    // console.log(result);
  }

  console.log("The final result is: ", result);
}

sumOfCubes(1, 5, 9);
sumOfCubes(2);
sumOfCubes();

console.log("----------------------------Q3---------------------");

function isStrStartOfWord(a, b) {
  if (a == b.slice(0, a.length)) {
    // 'bu' == 'bu'
    console.log(true);
  } else {
    console.log(false);
  }
}

isStrStartOfWord("bu", "button");
isStrStartOfWord("tri", "triplet");
isStrStartOfWord("beau", "pastry");

console.log("----------------------------Q4---------------------");

function isLEQZero(a) {
  if (a <= 0) {
    console.log(true);
  } else {
    console.log(false);
  }
}

isLEQZero(3);
isLEQZero(0);
isLEQZero(-4);
isLEQZero(10);

console.log("----------------------------Q5---------------------");

function countOccurrences(a, b) {
  let counter = 0;
  for (let i = 0; i < a.length; i++) {
    if (a[i] == a[b]) {
      counter += a.length;
    }
    return counter;
  }
}

console.log(countOccurrences("this is a string", "i"));

console.log("----------------------------Q6---------------------");

function calcBaseToExponent(x, n) {
  console.log(x ** n);
}

calcBaseToExponent(5, 5);
calcBaseToExponent(10, 10);
calcBaseToExponent(3, 3);

console.log("----------------------------Q7---------------------");

function dogAge(age) {
  const dogAge = age * 7;
  console.log(`Your doggo is ${dogAge} years old in dog years!`);
}

dogAge(4);

console.log("----------------------------Q8---------------------");

function calcLifetimeSupply(age, supply, maxAge = 100) {
  // const maxAge = 100;
  const supplyNeeded = Math.round((maxAge - age) * 365.25 * supply);
  console.log(
    `The snack company should provide you with ${supplyNeeded} units, until you are a ripe old age of ${maxAge}. Happy snacking!`
  );
}

calcLifetimeSupply(25, 2);
calcLifetimeSupply(40, 3);
calcLifetimeSupply(32, 0.58, 65);

console.log("----------------------------Q9---------------------");

function isWaldoHere(string) {
  if (string.includes("Waldo") || string.includes("waldo")) {
    console.log(true);
  } else {
    console.log(false);
  }
}

isWaldoHere("is there a wal here?");
isWaldoHere("I found you Waldo!");
isWaldoHere("Wait, don't you mean Wally?");
isWaldoHere("waldo is here");

console.log("----------------------------Q10---------------------");

function isEqualSlices(totalSlice, totalPeople, slicePerPerson) {
  if (totalSlice >= totalPeople * slicePerPerson) {
    console.log(true);
  } else {
    console.log(false);
  }
}

isEqualSlices(8, 3, 2);
isEqualSlices(8, 3, 3);
isEqualSlices(24, 12, 2);

console.log("----------------------------Q11---------------------");

function isEqualNumXandO(string) {
  let counterO = 0;
  let counterX = 0;
  for (let i = 0; i < string.length; i++) {
    // console.log(i);

    if (string[i].includes("o")) {
      counterO++;
    }
    if (string[i].includes("x") || string[i].includes("X")) {
      counterX++;
    }
  }

  if (counterO == counterX) {
    console.log(true);
  } else {
    console.log(false);
  }
  console.log(counterO, counterX);
}

isEqualNumXandO("ooxx");
isEqualNumXandO("xooxx");
isEqualNumXandO("ooxXm");
isEqualNumXandO("zpzpzpp");
isEqualNumXandO("zzoo");

console.clear();
console.log("----------------------------Q12---------------------");

function isPrime(number) {
  for (let i = 2; i < number; i++) {
    if (number % i === 0) {
      return false;
    }
  }

  return true;
}

console.log(isPrime(7));
console.log(isPrime(9));

console.log(isPrime(10));

console.log("----------------------------Q13---------------------");

function validateEmail(string) {
  if (
    string.indexOf("@") !== string.lastIndexOf("@") ||
    string.indexOf(".") === -1 ||
    string[string.length - 1] === "." ||
    string[string.length - 1] === "@" ||
    string.lastIndexOf(".") < string.indexOf("@") ||
    string.includes(".@") ||
    string.includes("@.") ||
    string.includes("..") ||
    string.indexOf("@") == 0
  ) {
    console.log(false);
  } else {
    console.log(true);
  }
}

validateEmail("j@example.com"); // true
validateEmail("@example.com"); // false
validateEmail("john.smith@com"); // false
validateEmail("john.smith@email.com"); // true
validateEmail("john..smith@email.com"); // false
validateEmail("john.@email.com"); // false
validateEmail("john@.email.com"); // false
