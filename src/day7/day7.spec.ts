import {expect} from "chai";
import {calculateLeastFuel, median} from "./day7";

describe.only('Day 7 tests', () => {
  let testPositions = [16, 1, 2, 0, 4, 2, 7, 1, 2, 14];

  it('should should find the median of test positions', () => {
    const med = median(testPositions);

    expect(med).to.be.equal(2);
  });

  it('should should return 37 for test positions', () => {
    const fuel = calculateLeastFuel(testPositions);

    expect(fuel).to.be.equal(37);
  });
});