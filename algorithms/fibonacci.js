// fibbonacci sequence is a series of numbers in whic each number is the sum of the two preceding ones
// usually starting with 0 and 1

export const fibonacci = (n) => {
  const fib = [0, 1];
  for (let i = 2; i < n; i++) {
    fib[i] = fib[i - 1] + fib[i - 2];
  }
  return fib;
};

// BIG-O O(n)
