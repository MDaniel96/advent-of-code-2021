import {getPaths} from "./day12";
import {expect} from "chai";

describe('Day 12 tests', () => {
  const smallCavesInput = [
    'start-A',
    'start-b',
    'A-c',
    'A-b',
    'b-d',
    'A-end',
    'b-end'
  ];

  const mediumCavesInput = [
    'dc-end',
    'HN-start',
    'start-kj',
    'dc-start',
    'dc-HN',
    'LN-dc',
    'HN-end',
    'kj-sa',
    'kj-HN',
    'kj-dc'
  ];

  const largeCavesInput = [
    'fs-end',
    'he-DX',
    'fs-he',
    'start-DX',
    'pj-DX',
    'end-zg',
    'zg-sl',
    'zg-pj',
    'pj-he',
    'RW-he',
    'fs-DX',
    'pj-RW',
    'zg-RW',
    'start-pj',
    'he-WI',
    'zg-he',
    'pj-fs',
    'start-RW'
  ];

  it('should find 10 paths for small input', () => {
    const paths = getPaths(smallCavesInput);

    expect(paths).to.be.equal(10);
  });

  it('should find 19 paths for medium input', () => {
    const paths = getPaths(mediumCavesInput);

    expect(paths).to.be.equal(19);
  });

  it('should find 226 paths for large input', () => {
    const paths = getPaths(largeCavesInput);

    expect(paths).to.be.equal(226);
  });

  it('should find 36 paths for small input if more visits allowed', () => {
    const paths = getPaths(smallCavesInput, true);

    expect(paths).to.be.equal(36);
  });

  it('should find 103 paths for medium input if more visits allowed', () => {
    const paths = getPaths(mediumCavesInput, true);

    expect(paths).to.be.equal(103);
  });

  it('should find 3509 paths for large input if more visits allowed', () => {
    const paths = getPaths(largeCavesInput, true);

    expect(paths).to.be.equal(3509);
  });
});