
export const factorial = (n) => {
    // Big-O O(n)
    let factorial = 1;
    for (let i = 1; i <= n; i++) {
        factorial = factorial * i;
    }

    return factorial;
}