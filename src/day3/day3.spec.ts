import {calculateConsumption, calculateLifeConsumption} from "./day3";
import {expect} from "chai";

describe('Day 3 tests', () => {
  const simpleDiagnostics = [
    '011',
    '110',
    '010'
  ];

  const testDiagnostics = [
    '00100',
    '11110',
    '10110',
    '10111',
    '10101',
    '01111',
    '00111',
    '11100',
    '10000',
    '11001',
    '00010',
    '01010'
  ];

  describe('Part 1', () => {
    it('should return 010 as gamma rate and 101 as epsilon rate for simple diagnostics', () => {
      const expectedConsumption = {gamma: '010', epsilon: '101'};

      const consumption = calculateConsumption(simpleDiagnostics);

      expect(consumption).to.be.eql(expectedConsumption);
    });

    it('should return 10110 as gamma rate and 01001 as epsilon rate for test diagnostics', () => {
      const expectedConsumption = {gamma: '10110', epsilon: '01001'};

      const consumption = calculateConsumption(testDiagnostics);

      expect(consumption).to.be.eql(expectedConsumption);
    });
  });

  describe('Part 2', () => {
    it('should return 011 as gamma rate and 110 as epsilon rate for simple diagnostics', () => {
      const expectedConsumption = {gamma: '011', epsilon: '110'};

      const consumption = calculateLifeConsumption(simpleDiagnostics);

      expect(consumption).to.be.eql(expectedConsumption);
    });

    it('should return 10111 as gamma rate and 01010 as epsilon rate for test diagnostics', () => {
      const expectedConsumption = {gamma: '10111', epsilon: '01010'};

      const consumption = calculateLifeConsumption(testDiagnostics);

      expect(consumption).to.be.eql(expectedConsumption);
    });
  });
});