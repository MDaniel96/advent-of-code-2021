import {findCorruptedCharacter, getSyntaxErrorScore} from "./day10";
import {expect} from "chai";

describe.only('Day 10 tests', () => {
  const testChunks = [
    '[({(<(())[]>[[{[]{<()<>>',
    '[(()[<>])]({[<{<<[]>>(',
    '{([(<{}[<>[]}>{[]{[(<()>',
    '(((({<>}<{<{<>}{[]{[]{}',
    '[[<[([]))<([[{}[[()]]]',
    '[{[{({}]{}}([{[{{{}}([]',
    '{<[[]]>}<{[{[{[]{()[[[]',
    '[<(<(<(<{}))><([]([]()',
    '<{([([[(<>()){}]>(<<{{',
    '<{([{{}}[<[[[<>{}]]]>[]]'
  ];

  it('should find corrupted character in lines', () => {
    const line = '{([(<{}[<>[]}>{[]{[(<()>';
    const line2 = '[{[{({}]{}}([{[{{{}}([]';

    const character = findCorruptedCharacter(line);
    const character2 = findCorruptedCharacter(line2);

    expect(character).to.be.equal('}');
    expect(character2).to.be.equal(']');
  });

  it('should find no corrupted character in lines', () => {
    const line = '[(()[<>])]({[<{<<[]>>(';

    const character = findCorruptedCharacter(line);

    expect(character).to.be.equal('');
  });

  it('should return correct syntax error score for test data', () => {
    const score = getSyntaxErrorScore(testChunks);

    expect(score).to.be.equal(26397);
  });
});