// understand recursivity
// base case - recursive step
// sum(0) = 0 -> base case
// sum(1) = sum(0) + 1 = 1
// sum(2) = sum(1) + 2 = 3
// ...

// sum recursive
function sum(num) {
  if (num === 0) {
    return 0
  } else {
    return num + sum(num - 1)
  }
}
// console.log('sum:', sum(2))
// console.log('sum:', sum(4))

// sum without recursive
function sumAlternative(num) {
  let sum = 0
  for (let i = 0; i <= sum; i++) {
    sum += i
  }
  return sum
}

// console.log('sum without recursive:', sumAlternative(0))

// multiply recursive
// m(2, -2) = m(2, -1) - 2 = -4
// m(2, -1) = m(2, 0) - 2 = -2
// m(2, 0) = 2 * 0 = 0
// m(2, 1) = m(2, 0) + 2 = 2
// m(2, 2) = m(2, 1) + 2 = 4
// m(2, 3) = m(2, 2) + 2 = 6
// m(2, 4) = m(2, 3) + 2 = 8
function multiply(num1, num2) {
  if (num1 === 0 || num2 === 0) {
    return 0
  } else if (num2 < 0) {
    return multiply(num1, num2 + 1) - num1
  } else {
    return multiply(num1, num2 - 1) + num1
  }
}

console.log('multiply', multiply(2, 4));
console.log('multiply', multiply(-2, 4));
console.log('multiply', multiply(2, -4));
