import {calculateLowestRisk} from "./day15";
import {expect} from "chai";

describe('Day 15 tests', () => {
  const testCavern = [
    '1163751742',
    '1381373672',
    '2136511328',
    '3694931569',
    '7463417111',
    '1319128137',
    '1359912421',
    '3125421639',
    '1293138521',
    '2311944581'
  ];

  it('should find the shortest path in a small cavern', () => {
    const smallCavern = [
      '19999',
      '19111',
      '11191'
    ];

    const risk = calculateLowestRisk(smallCavern);

    expect(risk).to.be.equal(8);
  });

  it('should find the shortest path in test cavern', () => {
    const risk = calculateLowestRisk(testCavern);

    expect(risk).to.be.equal(40);
  });

  it('should find the shortest path in extended cavern', () => {
    const risk = calculateLowestRisk(testCavern, true);

    expect(risk).to.be.equal(315);
  });
});
