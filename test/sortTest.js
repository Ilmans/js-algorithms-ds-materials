import assert from "assert";
import { describe, it } from "./test.js";
import { bubbleSort } from "../algorithms/sort.js";

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
  };
  