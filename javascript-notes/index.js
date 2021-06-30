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

isPositive(0);
