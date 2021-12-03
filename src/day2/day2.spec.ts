import {describe} from "mocha";
import {expect} from "chai";
import {getPosition, getPositionUsingAim} from "./day2";

describe('Day 2 tests', () => {
  const commands = [
    {direction: 'forward', unit: 5},
    {direction: 'down', unit: 5},
    {direction: 'forward', unit: 8},
    {direction: 'up', unit: 3},
    {direction: 'down', unit: 8},
    {direction: 'forward', unit: 2},
  ];

  it('should return the correct position', () => {
    const expectedPosition = {horizontal: 15, depth: 10};

    const position = getPosition(commands);

    expect(position).to.be.eql(expectedPosition);
  });

  it('should return the correct position when aim is used', () => {
    const expectedPosition = {horizontal: 15, depth: 60};

    const position = getPositionUsingAim(commands);

    expect(position).to.be.eql(expectedPosition);
  });
});
