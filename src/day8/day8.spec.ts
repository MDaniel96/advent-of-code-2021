import {calculateOutputSum, countUniqueSegments} from "./day8";
import {expect} from "chai";

describe('Day 8 tests', () => {
  const testSegments = [
    "be cfbegad cbdgef fgaecd cgeb fdcge agebfd fecdb fabcd edb|fdgacbe cefdb cefbgd gcbe",
    "edbfga begcd cbg gc gcadebf fbgde acbgfd abcde gfcbed gfec|fcgedb cgb dgebacf gc",
    "fgaebd cg bdaec gdafb agbcfd gdcbef bgcad gfac gcb cdgabef|cg cg fdcagb cbg",
    "fbegcd cbd adcefb dageb afcb bc aefdc ecdab fgdeca fcdbega|efabcd cedba gadfec cb",
    "aecbfdg fbg gf bafeg dbefa fcge gcbea fcaegb dgceab fcbdga|gecf egdcabf bgf bfgea",
    "fgeab ca afcebg bdacfeg cfaedg gcfdb baec bfadeg bafgc acf|gebdcfa ecba ca fadegcb",
    "dbcfg fgd bdegcaf fgec aegbdf ecdfab fbedc dacgb gdcebf gf|cefg dcbef fcge gbcadfe",
    "bdfegc cbegaf gecbf dfcage bdacg ed bedf ced adcbefg gebcd|ed bcgafe cdgba cbgef",
    "egadfb cdbfeg cegd fecab cgb gbdefca cg fgcdab egfdb bfceg|gbdfcae bgc cg cgb",
    "gcafb gcf dcaebfg ecagb gf abcdeg gaef cafbge fdbac fegbdc|fgae cfgab fg bagce"
  ];

  it('should return 26 for test segments', () => {
    const uniqueSegments = countUniqueSegments(testSegments);

    expect(uniqueSegments).to.be.equal(26);
  });

  it('should return 61229 for test segments output sum', () => {
    const testData = ['acedgfb cdfbe gcdfa fbcad dab cefabd cdfgeb eafb cagedb ab|cdfeb fcadb cdfeb cdbaf']

    const outputSum = calculateOutputSum(testData);

    expect(outputSum).to.be.equal(5353);
  });

  it('should return 61229 for test segments output sum', () => {
    const outputSum = calculateOutputSum(testSegments);

    expect(outputSum).to.be.equal(61229);
  });
});