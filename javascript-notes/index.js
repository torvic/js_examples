function getSecondLargest(nums) {
  // Complete the function
  let secondNumberMax = 0;
  let numMax = Math.max(...nums);
  nums.forEach((el, i, nums) => {
    if (el >= secondNumberMax && el < numMax) {
      secondNumberMax = el;
    }
  });
  return secondNumberMax;
}

// console.log(getSecondLargest([2, 3, 6, 6, 5]));
const reverseString = (s) => {
  try {
    console.log(s.split('').reverse().join(''));
  } catch (err) {
    console.log(err.message);
  } finally {
    console.log(s);
  }
};

// reverseString(1234);
const throwZero = () => {
  throw { message: 'Zero Error' };
};

const isPositive = (a) => {
  if (a > 0) {
    return 'YES';
  } else if (a === 0) {
    try {
      throwZero();
    } catch (e) {
      console.log(e.message);
    }
  }
  //else {
  //  try {
  //    throw 'Negative Error';
  //  } catch (err) {
  //    console.log(err);
  //  }
  //}
};

// isPositive(0);

class Rectangle {
  constructor(w, h) {
    this.w = w;
    this.h = h;
  }
}

Rectangle.prototype.area = function () {
  return this.w * this.h;
};

class Square extends Rectangle {
  constructor(w, h) {
    super(w, h);
    this.h = w;
  }
}

// console.log(Object.getOwnPropertyNames(Rectangle.prototype));
// console.log(Object.getOwnPropertyNames(Square.prototype));

const rec = new Rectangle(3, 4);
const sqr = new Square(3);
// console.log(rec.area());
// console.log(sqr.area());

function sides(literals, ...expressions) {
  let a = expressions[0];
  let p = expressions[1];

  return [
    (p - Math.sqrt(p * p - 16 * a)) / 4,
    (p + Math.sqrt(p * p - 16 * a)) / 4,
  ];

  //return `${literals[0]} ${(p + Math.sqrt(p * p - 16 * a)) / 4} ${
  //  literals[1]
  //} ${(p - Math.sqrt(p * p - 16 * a)) / 4} ${literals[2]} `;
}
//console.log(sides`The area is: ${140}.\nThe perimeter is: ${48}.`);

function modifyArray(nums) {
  const newArray = nums.map((el) => {
    if (el % 2 === 0) {
      return el * 2;
    } else {
      return el * 3;
    }
  });
  return newArray;
}

/* ===== Otro ejemplo ===== */
/* ('use strict');
process.stdin.resume();
process.stdin.setEncoding('utf-8');

let inputString = '';
let currentLine = 0;

process.stdin.on('data', (inputStdin) => {
  inputString += inputStdin;
});

process.stdin.on('end', (_) => {
  inputString = inputString
    .trim()
    .split('\n')
    .map((string) => {
      return string.trim();
    });

  main();
});

function readLine() {
  return inputString[currentLine++];
} */

// console.log(modifyArray([1, 2, 3, 4, 5]));
const getMaxLessThanK = (n, k) => {
  let arr = [];
  let max = 0;
  for (let index = 1; index < n; index++) {
    for (let j = 1; j < n - (index - 1); j++) {
      let bitwise = index & (index + j);
      if (bitwise < k && bitwise > max) {
        max = bitwise;
      }
      // arr.push(bitwise);
    }
  }
  // const newArr = arr.filter((el) => el < k);

  // newArr.forEach((el) => {
  //   if (el > max) {
  //     max = el;
  //   }
  // });

  return max;
  // console.log(Math.max(...newArr));
};
// getMaxLessThanK(2, 2);
// console.log(getMaxLessThanK(955, 236));

/* function main() {
  const q = +readLine();

  for (let i = 0; i < q; i++) {
    const [n, k] = readLine().split(' ').map(Number);

    console.log(getMaxLessThanK(n, k));
  }
} */

/* ===== Otro ejemplo ===== */
function getDayName(dateString) {
  let dayName = [
    'Sunday',
    'Monday',
    'Tuesday',
    'Wednesday',
    'Thursday',
    'Friday',
    'Saturday',
  ];

  let date = new Date(dateString);
  let dayNumber = date.getDay();
  // Write your code here

  return dayName[dayNumber];
}
console.log(getDayName('10/11/2009'));
console.log(getDayName('11/10/2010'));
