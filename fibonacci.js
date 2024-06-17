// Iterative method

function fibs(n) {
  if (n <= 0) {
    return [];
  }
  if (n === 1) {
    return [0];
  }
  
  let first = 0;
  let second = 1;
  let result = [first, second];
  
  for (let i = 2; i < n; i++) {
    let newNumber = first + second;
    result.push(newNumber);
    first = second;
    second = newNumber;
  }
  return result;
}


// Recursive method

function fibsRec(n) {
  if (n <= 0) return [];
  if (n === 1) return [0];
  if (n === 2) return [0, 1];

  // Get the sequence up to n-1
  const sequence = fibsRec(n - 1);

  // Calculate the next Fibonacci number by summing the last two numbers
  const nextNumber = sequence[sequence.length - 2] + sequence[sequence.length - 1];

  // Add the next Fibonacci number to the sequence
  sequence.push(nextNumber);

  return sequence;
}

module.exports = {
  fibs,
  fibsRec
};
