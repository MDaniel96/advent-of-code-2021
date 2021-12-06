import {calculateFishNumberAfter80Days} from "./day6";
import {expect} from "chai";

describe.only('Day 6 tests', () => {
  let testFish = [3, 4, 3, 1, 2];

  it('should should return 5934 fish after 80 days for test input', () => {
    const fishNumber = calculateFishNumberAfter80Days(testFish);

    expect(fishNumber).to.be.equal(5934);
  });
});