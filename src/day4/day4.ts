export type BingoInput = {
  selectedNumbers: number[];
  boards: Board[];
}

export type Board = {
  fields: number[][];
}

export function calculateWinnerBoardScore(input: BingoInput): number {
  const {selectedNumbers, boards} = input;
  const boardSize = boards[0].fields.length;

  let checkedNumbers: number[] = [];
  for (let selectedNumberIndex = 0; selectedNumberIndex < selectedNumbers.length; selectedNumberIndex++) {
    checkedNumbers.push(selectedNumbers[selectedNumberIndex]);
    if (selectedNumberIndex + 1 >= boardSize) {

      for (let boardIndex = 0; boardIndex < boards.length; boardIndex++) {
        const board = boards[boardIndex];
        let win = false;
        for (let i = 0; i < boardSize; i++) {
          let binged = 0;
          for (let j = 0; j < boardSize; j++) {
            checkedNumbers.includes(board.fields[i][j]) ? binged++ : binged;
          }
          if (binged === boardSize) win = true;
        }

        for (let j = 0; j < boardSize; j++) {
          let binged = 0;
          for (let i = 0; i < boardSize; i++) {
            checkedNumbers.includes(board.fields[i][j]) ? binged++ : binged;
          }
          if (binged === boardSize) win = true;
        }

        if (win) {
          let boardSum = 0;
          for (let i = 0; i < boardSize; i++) {
            for (let j = 0; j < boardSize; j++) {
              if (!checkedNumbers.includes(board.fields[i][j])) {
                boardSum += board.fields[i][j];
              }
            }
          }
          return boardSum * selectedNumbers[selectedNumberIndex];
        }
      }
    }
  }

  return 0;
}

export function processRawBingoInput(rawInput: string[]): BingoInput {
  const selectedNumbers = rawInput[0].split(',').map(selected => parseInt(selected));
  let boards: Board[] = [];
  let board: Board = {fields: []};
  let rowIndex = 0;
  rawInput.forEach((line, lineIndex) => {
    if (lineIndex > 1) {
      if (line === '') {
        boards.push(board);
        board = {fields: []};
        rowIndex = 0;
      } else {
        board.fields[rowIndex] = [];
        line.split(' ')
          .filter(num => !(num === ''))
          .map(Number)
          .forEach((num, index) => {
            board.fields[rowIndex][index] = num;
          });
        rowIndex++;
      }
    }
  });

  return {selectedNumbers, boards}
}