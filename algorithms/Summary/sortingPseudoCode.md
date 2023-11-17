# Bubblesort Pseudocode

function bubbleSort(arr):
    n = length of arr
    for i from 0 to n-1:
        for j from 0 to n-i-1:
            if arr[j] > arr[j+1]:
                swap(arr[j], arr[j+1])

# Example Usage:
unsortedArray = [38, 27, 43, 3, 9, 82, 10]
bubbleSort(unsortedArray)

---

# Insertion Sort Pseudocode

function insertionSort(arr):
    n = length of arr
    for i from 1 to n-1:
        key = arr[i]
        j = i - 1
        while j >= 0 and arr[j] > key:
            arr[j + 1] = arr[j]
            j = j - 1
        arr[j + 1] = key

# Example Usage:
unsortedArray = [38, 27, 43, 3, 9, 82, 10]
insertionSort(unsortedArray)

---

# Quick Sort Pseudocode

function quickSort(arr, low, high):
    if low < high:
        pi = partition(arr, low, high)
        quickSort(arr, low, pi - 1)
        quickSort(arr, pi + 1, high)

function partition(arr, low, high):
    pivot = arr[high]
    i = low - 1
    for j from low to high-1:
        if arr[j] < pivot:
            i = i + 1
            swap(arr[i], arr[j])
    swap(arr[i + 1], arr[high])
    return i + 1

# Example Usage:
unsortedArray = [38, 27, 43, 3, 9, 82, 10]
quickSort(unsortedArray, 0, length of unsortedArray - 1)

---

# Merge Sort Pseudocode

function mergeSort(arr):
    if length of arr <= 1:
        return arr
    
    middle = length of arr / 2
    left = mergeSort(arr[0 to middle - 1])
    right = mergeSort(arr[middle to end])
    
    return merge(left, right)

function merge(left, right):
    result = []
    while left is not empty and right is not empty:
        if first element of left <= first element of right:
            append first element of left to result
            remove first element from left
        else:
            append first element of right to result
            remove first element from right

    append remaining elements of left to result
    append remaining elements of right to result

    return result

# Example Usage:
unsortedArray = [38, 27, 43, 3, 9, 82, 10]
sortedArray = mergeSort(unsortedArray)
