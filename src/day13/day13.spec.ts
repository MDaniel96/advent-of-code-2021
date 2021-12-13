import {fold, getDots} from "./day13";
import {expect} from "chai";

describe('Day 13 tests', () => {
  const testDots = [
    '6,10',
    '0,14',
    '9,10',
    '0,3',
    '10,4',
    '4,11',
    '6,0',
    '6,12',
    '4,1',
    '0,13',
    '10,12',
    '3,4',
    '3,0',
    '8,4',
    '1,10',
    '2,14',
    '8,10',
    '9,0'
  ];

  const testInstructions = [
    'y=7',
    'x=5'
  ];

  it('should return 17 dots after the first fold', () => {
    const dots = getDots(testDots, testInstructions, true);

    expect(dots).to.be.equal(17);
  });

  it('should return 16 dots after all of the folds', () => {
    const dots = getDots(testDots, testInstructions);

    expect(dots).to.be.equal(16);
  });

  it('should fold dot to the correct position along y axis', () => {
    const foldedDot = fold({x: 6, y: 8}, {axis: 'y', value: 6});

    expect(foldedDot).to.be.eql({x: 6, y: 4});
  });

  it('should fold dot to the correct position along x axis if it is on left side', () => {
    const foldedDot = fold({x: 3, y: 8}, {axis: 'x', value: 5});

    expect(foldedDot).to.be.eql({x: 3, y: 8});
  });

  it('should fold dot to the correct position along x axis', () => {
    const foldedDot = fold({x: 7, y: 8}, {axis: 'x', value: 5});

    expect(foldedDot).to.be.eql({x: 3, y: 8});
  });
});
