import {calculateFishNumberAfter80Days, calculateFishNumberAfterPeriod} from "./day6";
import {expect} from "chai";

describe('Day 6 tests', () => {
  let testFish = [3, 4, 3, 1, 2];

  it('should should return 5934 fish after 80 days for test input', () => {
    const fishNumber = calculateFishNumberAfter80Days(testFish);

    expect(fishNumber).to.be.equal(5934);
  });

  it('should should return 26984457539 fish after 256 days for test input', () => {
    const fishNumber = calculateFishNumberAfterPeriod(testFish, 256);

    expect(fishNumber).to.be.equal(26984457539);
  });
});