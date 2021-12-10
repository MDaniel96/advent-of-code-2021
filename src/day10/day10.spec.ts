import {findCorruptedCharacter, getCompletionScore, getSyntaxCompletionScore, getSyntaxErrorScore} from "./day10";
import {expect} from "chai";

describe('Day 10 tests', () => {
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

  it('should find not corrupted character in lines', () => {
    const line = '[(()[<>])]({[<{<<[]>>(';

    const character = findCorruptedCharacter(line);

    expect(character).to.be.equal('');
  });

  it('should return correct syntax error score for test data', () => {
    const score = getSyntaxErrorScore(testChunks);

    expect(score).to.be.equal(26397);
  });

  it('should return correct syntax completion score', () => {
    const line = '<{([{{}}[<[[[<>{}]]]>[]]';
    const line2 = '[(()[<>])]({[<{<<[]>>(';
    const line3 = '[({(<(())[]>[[{[]{<()<>>';

    const completionScore = getCompletionScore(line);
    const completionScore2 = getCompletionScore(line2);
    const completionScore3 = getCompletionScore(line3);

    expect(completionScore).to.be.equal(294);
    expect(completionScore2).to.be.equal(5566);
    expect(completionScore3).to.be.equal(288957);
  });

  it('should return correct syntax completion score for test data', () => {
    const completionScore = getSyntaxCompletionScore(testChunks);

    expect(completionScore).to.be.equal(288957);
  });
});