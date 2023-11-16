
// fibbonacci sequence is a series of numbers in whic each number is the sum of the two preceding ones
// usually starting with 0 and 1

// BIG-O O(n)
export const fibonacci = (n) => {
        const fib = [0,1];
        for (let i = 2; i < n; i++ ){
            fib[i] = fib[i-1] + fib[i-2];
        }

        return fib;
}



// its it bad solution,,only for understanding recursion
// BIG-O O(2^n)
export const recursiveFibonacci = ( n ) => {
    if (n<2) return n;
    return recursiveFibonacci(n-1) + recursiveFibonacci(n-2);
}

// recursiveFibonacci(6) = 8;
// recursiveFibonacci(0) = 0;
// recursiveFibonacci(1) = 1;
