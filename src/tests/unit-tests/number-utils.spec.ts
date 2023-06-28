import { assert } from "chai";

import {
  calculatePower,
  calculateSimpleInterest,
} from "../../utils/number-utils";

describe("Calculations", () => {
  it("should calculate the power of a number", () => {
    assert.equal(calculatePower(2, 3), 8);
    assert.equal(calculatePower(5, 0), 1);
  });

  it("should calculate the simple interest", () => {
    assert.equal(calculateSimpleInterest(1000, 5, 2), 100);
    assert.equal(calculateSimpleInterest(5000, 10, 3), 1500);
  });
});
