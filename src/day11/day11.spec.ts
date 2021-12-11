import {getFlashes} from "./day11";
import {expect} from "chai";

describe('Day 11 tests', () => {
  const testEnergies = [
    '5483143223',
    '2745854711',
    '5264556173',
    '6141336146',
    '6357385478',
    '4167524645',
    '2176841721',
    '6882881134',
    '4846848554',
    '5283751526'
  ];

  it('should return 9 flashes after 2 steps', () => {
    const energies = [
      '11111',
      '19991',
      '19191',
      '19991',
      '11111'
    ];

    const flashes = getFlashes(energies, 2);

    expect(flashes).to.be.equal(9);
  });

  it('should return 1656 flashes for test energies after 100 steps', () => {
    const flashes = getFlashes(testEnergies);

    expect(flashes).to.be.equal(1656);
  });
});