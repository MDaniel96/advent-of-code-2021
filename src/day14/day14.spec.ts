import {calculateQuantityDifference} from "./day14";
import {expect} from "chai";

describe('Day 14 tests', () => {
  const testTemplate = 'NNCB';

  const testRules = [
    'CH->B',
    'HH->N',
    'CB->H',
    'NH->C',
    'HB->C',
    'HC->B',
    'HN->C',
    'NN->C',
    'BH->H',
    'NC->B',
    'NB->B',
    'BN->B',
    'BB->N',
    'BC->B',
    'CC->N',
    'CN->C'
  ];

  it('should return 1 difference after 1 insertions', () => {
    const difference = calculateQuantityDifference(testTemplate, testRules, 1);

    expect(difference).to.be.equal(1);
  });

  it('should return 5 difference after 2 insertions', () => {
    const difference = calculateQuantityDifference(testTemplate, testRules, 2);

    expect(difference).to.be.equal(5);
  });

  it('should return 7 difference after 3 insertions', () => {
    const difference = calculateQuantityDifference(testTemplate, testRules, 3);

    expect(difference).to.be.equal(7);
  });

  it('should return 1588 difference after 10 insertions', () => {
    const difference = calculateQuantityDifference(testTemplate, testRules, 10);

    expect(difference).to.be.equal(1588);
  });

  it('should return 2188189693529 difference after 40 insertions', () => {
    const difference = calculateQuantityDifference(testTemplate, testRules, 40);

    expect(difference).to.be.equal(2188189693529);
  });
});
