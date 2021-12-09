import {expect} from "chai";
import {calculateHeightsSum, calculateLargestBasinSum, convert, getBasinSize} from "./day9";

describe('Day 9 tests', () => {
  const testHeights = [
    "2199943210",
    "3987894921",
    "9856789892",
    "8767896789",
    "9899965678"
  ];

  it('should return 15 for test heights sum', () => {
    const heightsSum = calculateHeightsSum(testHeights);

    expect(heightsSum).to.be.equal(15);
  });

  it('should return top left test basin size', () => {
    const basinSize = getBasinSize(0, 0, convert(testHeights));

    expect(basinSize).to.be.equal(3);
  });

  it('should return middle test basin size', () => {
    const basinSize = getBasinSize(2, 2, convert(testHeights));

    expect(basinSize).to.be.equal(14);
  });

  it('should return middle test basin size', () => {
    const basinSum = calculateLargestBasinSum(testHeights);

    expect(basinSum).to.be.equal(1134);
  });
});