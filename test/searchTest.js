import assert from "assert";
import { describe, it } from "./test.js";
import { linearSearch } from "../algorithms/search.js";

export const searchTest = () => {
  describe("Test linear search", () => {
    it("10 , should be found in index 4", () => {
      assert.deepStrictEqual(linearSearch([-5, 4, 5, 6, 10], 10), 4);
    });
  });
};
