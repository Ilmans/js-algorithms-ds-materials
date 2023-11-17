import assert from "assert";
import { describe, it } from "./test.js";
import { bubbleSort, insertionSort, mergeSort, quickSort } from "../algorithms/sort.js";

export const sortTest = () => {
    describe("Test bubble sort", () => {
      it("should sort [1, 3, 4, 1, 5, 9, 2, 6, 5, 3, 5]", () => {
        assert.deepStrictEqual(bubbleSort([1, 3, 4, 1, 5, 9, 2, 6, 5, 3, 5]), [1, 1, 2, 3, 3, 4, 5, 5, 5, 6, 9]);
      });
  
      it("should sort [9, 8, 7, 6, 5, 4, 3, 2, 1]", () => {
        assert.deepStrictEqual(bubbleSort([9, 8, 7, 6, 5, 4, 3, 2, 1]), [1, 2, 3, 4, 5, 6, 7, 8, 9]);
      });
  
      it("should sort [5, 5, 5, 5, 5]", () => {
        assert.deepStrictEqual(bubbleSort([5, 5, 5, 5, 5]), [5, 5, 5, 5, 5]);
      });
  
      it("should sort [1]", () => {
        assert.deepStrictEqual(bubbleSort([1]), [1]);
      });
  
      it("should sort an empty array", () => {
        assert.deepStrictEqual(bubbleSort([]), []);
      });
    });



    describe("Test insertion sort", () => {
      it("should sort [1, 3, 4, 1, 5, 9, 2, 6, 5, 3, 5]", () => {
        assert.deepStrictEqual(insertionSort([1, 3, 4, 1, 5, 9, 2, 6, 5, 3, 5]), [1, 1, 2, 3, 3, 4, 5, 5, 5, 6, 9]);
      });
  
      it("should sort [9, 8, 7, 6, 5, 4, 3, 2, 1]", () => {
        assert.deepStrictEqual(insertionSort([9, 8, 7, 6, 5, 4, 3, 2, 1]), [1, 2, 3, 4, 5, 6, 7, 8, 9]);
      });
  
      it("should sort [5, 5, 5, 5, 5]", () => {
        assert.deepStrictEqual(insertionSort([5, 5, 5, 5, 5]), [5, 5, 5, 5, 5]);
      });
  
      it("should sort [1]", () => {
        assert.deepStrictEqual(insertionSort([1]), [1]);
      });
  
      it("should sort an empty array", () => {
        assert.deepStrictEqual(insertionSort([]), []);
      });
    });
  

    describe("Test quick sort", () => {
      it("should sort [1, 3, 4, 1, 5, 9, 2, 6, 5, 3, 5]", () => {
        assert.deepStrictEqual(quickSort([1, 3, 4, 1, 5, 9, 2, 6, 5, 3, 5]), [1, 1, 2, 3, 3, 4, 5, 5, 5, 6, 9]);
      });
  
      it("should sort [9, 8, 7, 6, 5, 4, 3, 2, 1]", () => {
        assert.deepStrictEqual(quickSort([9, 8, 7, 6, 5, 4, 3, 2, 1]), [1, 2, 3, 4, 5, 6, 7, 8, 9]);
      });
  
      it("should sort [5, 5, 5, 5, 5]", () => {
        assert.deepStrictEqual(quickSort([5, 5, 5, 5, 5]), [5, 5, 5, 5, 5]);
      });
  
      it("should sort [1]", () => {
        assert.deepStrictEqual(quickSort([1]), [1]);
      });
  
      it("should sort an empty array", () => {
        assert.deepStrictEqual(quickSort([]), []);
      });
    });
  

    
    describe("Test merge sort", () => {
      it("should sort [1, 3, 4, 1, 5, 9, 2, 6, 5, 3, 5]", () => {
        assert.deepStrictEqual(mergeSort([1, 3, 4, 1, 5, 9, 2, 6, 5, 3, 5]), [1, 1, 2, 3, 3, 4, 5, 5, 5, 6, 9]);
      });
  
      it("should sort [9, 8, 7, 6, 5, 4, 3, 2, 1]", () => {
        assert.deepStrictEqual(mergeSort([9, 8, 7, 6, 5, 4, 3, 2, 1]), [1, 2, 3, 4, 5, 6, 7, 8, 9]);
      });
  
      it("should sort [5, 5, 5, 5, 5]", () => {
        assert.deepStrictEqual(mergeSort([5, 5, 5, 5, 5]), [5, 5, 5, 5, 5]);
      });
  
      it("should sort [1]", () => {
        assert.deepStrictEqual(mergeSort([1]), [1]);
      });
  
      it("should sort an empty array", () => {
        assert.deepStrictEqual(mergeSort([]), []);
      });
    });
  };
  