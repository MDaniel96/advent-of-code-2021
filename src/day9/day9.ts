export type Height = {
  row: number;
  column: number;
  height: number;
  visited: boolean;
}

export function calculateHeightsSum(heightInput: string[]): number {
  const basins = getBasins(heightInput);
  return basins.reduce((heightsSum, basin) => heightsSum + 1 + basin.height, 0);
}

export function calculateLargestBasinSum(heightInput: string[]): number {
  let basinSizes = getBasins(heightInput)
    .map(basin => getBasinSize(basin.row, basin.column, convert(heightInput)))
    .sort((b1, b2) => b2 - b1);
  return basinSizes[0] * basinSizes[1] * basinSizes[2];
}

export function getBasinSize(i: number, j: number, heights: Height[][]): number {
  const height = heights[i] ? heights[i][j] : undefined;
  if (!height || height.height === 9 || height.visited) {
    return 0;
  }

  heights[i][j].visited = true;
  return 1 + getBasinSize(i - 1, j, heights) + getBasinSize(i + 1, j, heights) +
    getBasinSize(i, j - 1, heights) + getBasinSize(i, j + 1, heights);
}

function getBasins(heightInput: string[]): Height[] {
  let basins: Height[] = [];
  heightInput.forEach((heights, row) => {
    for (let column = 0; column < heights.length; column++) {
      const height = parseInt(heights[column]);

      const up = heightInput[row - 1] ? heightInput[row - 1][column] : undefined;
      const down = heightInput[row + 1] ? heightInput[row + 1][column] : undefined;
      const right = heightInput[row][column + 1];
      const left = heightInput[row][column - 1];

      if ((!up || height < parseInt(up)) && (!down || height < parseInt(down)) &&
        (!right || height < parseInt(right)) && (!left || height < parseInt(left))) {
        basins.push({row, column, height, visited: false});
      }
    }
  });
  return basins;
}

export function convert(heightInput: string[]): Height[][] {
  let outputHeights: Height[][] = [];

  heightInput.forEach((heights, row) => {
    outputHeights[row] = [];
    for (let column = 0; column < heights.length; column++) {
      const height = parseInt(heights[column]);
      outputHeights[row][column] = {row, column, height, visited: false};
    }
  });

  return outputHeights;
}