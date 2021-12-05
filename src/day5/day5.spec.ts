import {calculateOverlaps, parseLine} from "./day5";
import {expect} from "chai";

describe.only('Day 5 tests', () => {
  const testPoints = [
    '0,9->5,9',
    '8,0->0,8',
    '9,4->3,4',
    '2,2->2,1',
    '7,0->7,4',
    '6,4->2,0',
    '0,9->2,9',
    '3,4->1,4',
    '0,0->8,8',
    '5,5->8,2'
  ];

  it('should parse a line to two points', () => {
    const points = parseLine('0,9->5,9');

    expect(points.length).to.be.equal(2);
    expect(points[0]).to.be.eql({x: 0, y: 9});
    expect(points[1]).to.be.eql({x: 5, y: 9});
  });

  it('should calculate 5 overlapping points for test points', () => {
    const overlaps = calculateOverlaps(testPoints);

    expect(overlaps).to.be.equal(5);
  });
});