import {calculateBoardScore, processRawBingoInput} from "./day4";
import {expect} from "chai";

describe.only('Day 4 tests', () => {
  const testRawInput = [
    '7,4,9,5,11,17,23,2,0,14,21,24,10,16,13,6,15,25,12,22,18,20,8,19,3,26,1',
    '',
    '22 13 17 11  0',
    '8  2 23  4 24',
    '21  9 14 16  7',
    '6 10  3 18  5',
    '1 12 20 15 19',
    '',
    '3 15  0  2 22',
    '9 18 13 17  5',
    '19  8  7 25 23',
    '20 11 10 24  4',
    '14 21 16 12  6',
    '',
    '14 21 17 24  4',
    '10 16 15  9 19',
    '18  8 23 26 20',
    '22 11 13  6  5',
    '2  0 12  3  7',
    ''
  ];

  it('should process raw input', () => {
    const rawInput = [
      '1,2,3,4,5',
      '',
      ' 2 34 44',
      '42  4 44',
      '12 34 44',
      '',
      ' 2 34 44',
      '42  4 44',
      '12 34 44',
      ''
    ]

    const bingoInput = processRawBingoInput(rawInput);

    expect(bingoInput.selectedNumbers.length).to.be.eql(5);
    expect(bingoInput.selectedNumbers[2]).to.be.eql(3);
    expect(bingoInput.boards.length).to.be.eql(2);
    expect(bingoInput.boards[0].fields[0][0]).to.be.eql(2);
  });

  it('should calculate board winning sum', () => {
    const bingoInput = processRawBingoInput(testRawInput);
    let boardScore = calculateBoardScore(bingoInput);

    expect(boardScore).to.be.eql(4512);
  });

  it('should calculate board loser sum', () => {
    const bingoInput = processRawBingoInput(testRawInput);
    let boardScore = calculateBoardScore(bingoInput, true);

    expect(boardScore).to.be.eql(1924);
  });
});