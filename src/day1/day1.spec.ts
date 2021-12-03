import {describe} from "mocha";
import {expect} from "chai";
import {countIncreases, countIncreasesUsingWindows} from "./day1";

type TestCase = {
  description: string;
  measurements: number[];
  expectedIncreases: number;
}

describe('Day 1, part 1 tests', () => {
  (
    [
      {
        description: 'should return 0 for one measurement',
        measurements: [199],
        expectedIncreases: 0
      },
      {
        description: 'should return 1 for a pair of increase',
        measurements: [199, 200],
        expectedIncreases: 1
      },
      {
        description: 'should return 0 for a pair of decrease',
        measurements: [199, 198],
        expectedIncreases: 0
      },
      {
        description: 'should return 0 for a pair of equals',
        measurements: [199, 199],
        expectedIncreases: 0
      },
      {
        description: 'should return 7 for given array',
        measurements: [199, 200, 208, 210, 200, 207, 240, 269, 260, 263],
        expectedIncreases: 7
      },
    ] as TestCase[]
  ).forEach(({description, measurements, expectedIncreases}) => {
    it(description, () => {
      const increases = countIncreases(measurements);

      expect(increases).to.be.equal(expectedIncreases);
    });
  });
});

describe('Day 1, part 2 tests', () => {
  (
    [
      {
        description: 'should return 0 if there are less than 2 windows',
        measurements: [199, 200, 208],
        expectedIncreases: 0
      },
      {
        description: 'should return 1 for a pair of increasing windows',
        measurements: [199, 200, 208, 210],
        expectedIncreases: 1
      },
      {
        description: 'should return 0 for a pair of decreasing windows',
        measurements: [199, 200, 208, 20],
        expectedIncreases: 0
      },
      {
        description: 'should return 0 for a pair of equal windows',
        measurements: [1, 200, 200, 1],
        expectedIncreases: 0
      },
      {
        description: 'should return 5 for given array',
        measurements: [199, 200, 208, 210, 200, 207, 240, 269, 260, 263],
        expectedIncreases: 5
      }
    ] as TestCase[]
  ).forEach(({description, measurements, expectedIncreases}) => {
    it(description, () => {
      const increases = countIncreasesUsingWindows(measurements);

      expect(increases).to.be.equal(expectedIncreases);
    });
  });
})