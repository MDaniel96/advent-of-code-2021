import {Destination, findHighestValue} from "./day17";
import {expect} from "chai";

describe.only('Day 15 tests', () => {
  const testDestination: Destination = {minX: 20, maxX: 30, minY: -10, maxY: -5};

  it('should find highest value for test destination', () => {
    const highestValue = findHighestValue(testDestination);

    expect(highestValue).to.be.equal(45);
  });
});
