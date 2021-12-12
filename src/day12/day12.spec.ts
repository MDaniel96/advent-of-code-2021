import {getPaths} from "./day12";
import {expect} from "chai";

describe.only('Day 12 tests', () => {
  it('should find 10 paths for small input', () => {
    const caves = [
      'start-A',
      'start-b',
      'A-c',
      'A-b',
      'b-d',
      'A-end',
      'b-end'
    ];

    const paths = getPaths(caves);

    expect(paths).to.be.equal(10);
  });

  it('should find 19 paths for medium input', () => {
    const caves = [
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

    const paths = getPaths(caves);

    expect(paths).to.be.equal(19);
  });

  it('should find 226 paths for large input', () => {
    const caves = [
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

    const paths = getPaths(caves);

    expect(paths).to.be.equal(226);
  });
});