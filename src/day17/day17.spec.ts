import {Destination, findHighestValue, findPossibleVelocities} from "./day17";
import {expect} from "chai";

describe('Day 15 tests', () => {
  const testDestination: Destination = {minX: 20, maxX: 30, minY: -10, maxY: -5};

  it('should find highest value for test destination', () => {
    const highestValue = findHighestValue(testDestination);

    expect(highestValue).to.be.equal(45);
  });

  it('should find number of possible values', () => {
    const highestValue = findPossibleVelocities(testDestination);

    expect(highestValue).to.be.equal(112);
  });
});
