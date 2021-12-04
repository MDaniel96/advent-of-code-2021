import {calculateConsumption} from "./day3";
import {expect} from "chai";

describe('Day 3 tests', () => {

  it('should return 010 as gamma rate and 101 as epsilon rate', () => {
    const diagnostics = [
      '011',
      '110',
      '010'
    ];
    const expectedConsumption = {gamma: '010', epsilon: '101'};

    const consumption = calculateConsumption(diagnostics);

    expect(consumption).to.be.eql(expectedConsumption);
  });

  it('should return 10110 as gamma rate and 01001 as epsilon rate', () => {
    const diagnostics = [
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
    const expectedConsumption = {gamma: '10110', epsilon: '01001'};

    const consumption = calculateConsumption(diagnostics);

    expect(consumption).to.be.eql(expectedConsumption);
  });
});