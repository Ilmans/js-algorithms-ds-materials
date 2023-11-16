

// big o =  O(n2)
export const bubbleSort = (arr) => {
  let n = arr.length;
  let swapped;

  do {
    swapped = false;
    for (let i = 0; i < n; i++) {
      if (arr[i] > arr[i + 1]) {
        [arr[i], arr[i + 1]] = [arr[i + 1], arr[i]];
        swapped = true;
      }
    }

    n--;
  } while (swapped);

  return arr;
};


// big o =  O(n2)
export const insertionSort = (arr) => {
  let n = arr.length;

  for (let i = 1; i < n; i++) {
    let currentElement = arr[i];
    let j = i - 1;

    while (j >= 0 && arr[j] > currentElement) {
      arr[j + 1] = arr[j];
      j--;
    }

    arr[j + 1] = currentElement;
  }

  return arr;
};


// big o = O(log n)
export const quickSort = (arr) => {

    if(arr.length <= 1) return arr;
    let pivot = arr[0];
    let left = [];
    let right = [];

    for ( let i = 1; i < arr.length; i ++) {
        if(arr[i] < pivot){
            left.push(arr[i])
        } else {
            right.push(arr[i])
        }
    }

    return quickSort(left).concat(pivot, quickSort(right));
}