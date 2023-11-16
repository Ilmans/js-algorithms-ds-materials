import assert from "assert";
import { describe, it } from "./test.js";
import { linearSearch } from "../algorithms/search.js";

export const searchTest = () => {
  describe("Test linear search", () => {
    it("10 , should be found in index 4", () => {
      assert.deepStrictEqual(linearSearch([-5, 4, 5, 6, 10], 10), 4);
    });
  });
  describe("Test Binary search", () => {
    it("10 , should be found in index 6", () => {
      assert.strictEqual(linearSearch([-5, 4, 2,5, 6,8, 10], 10), 6);
    });
    it("1 , should be  not found ( -1 )", () => {
      assert.strictEqual(linearSearch([-5, 4, 2,5, 6,8, 10], 1), -1);
    });
    it("6 , should be found in index 4", () => {
        assert.strictEqual(linearSearch([-5, 4, 2,5, 6,8, 10], 6), 4);
      });
  });
};
