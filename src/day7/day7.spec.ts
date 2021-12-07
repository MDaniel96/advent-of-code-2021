import {expect} from "chai";
import {calculateLeastFuel, calculateLeastFuelUsingConsumption, consumption, median} from "./day7";

describe('Day 7 tests', () => {
  let testPositions = [16, 1, 2, 0, 4, 2, 7, 1, 2, 14];

  it('should find the median of test positions', () => {
    const med = median(testPositions);

    expect(med).to.be.equal(2);
  });

  it('should return 37 for test positions', () => {
    const fuel = calculateLeastFuel(testPositions);

    expect(fuel).to.be.equal(37);
  });

  it('should return consumption of a distance', () => {
    expect(consumption(4)).to.be.equal(10);
    expect(consumption(3)).to.be.equal(6);
    expect(consumption(9)).to.be.equal(45);
  });

  it('should return 168 for test positions if we use consumption', () => {
    const fuel = calculateLeastFuelUsingConsumption(testPositions);

    expect(fuel).to.be.equal(168);
  });
});