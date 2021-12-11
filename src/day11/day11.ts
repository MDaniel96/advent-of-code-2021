type Energy = {
  row: number;
  column: number;
  value: number;
  flashed: boolean;
}

export function getFlashes(inputEnergies: string[], steps: number = 100): number {
  const energies = convert(inputEnergies);
  return [...Array(steps).keys()].reduce((flashes, _) => flashes + getStepFlashes(energies), 0);
}

export function getFirstSynchronizedFlashStep(inputEnergies: string[]): number {
  const energies = convert(inputEnergies);
  let step = 0;
  while (++step) {
    if (getStepFlashes(energies) === energies.length * energies[1].length) {
      return step;
    }
  }
  return 0;
}

function getStepFlashes(energies: Energy[][]): number {
  let flashes = 0;
  energies.forEach(row => row.forEach(energy => energy.value++));

  let flashy = findFlashy(energies);
  while (flashy) {
    getNeighbourDirections(flashy).forEach(direction => {
      const neighbour = energies[direction.row] ? energies[direction.row][direction.column] : null;
      if (neighbour && !neighbour.flashed) neighbour.value++;
    });
    flashy.flashed = true;
    flashy.value = 0;
    flashes++
    flashy = findFlashy(energies);
  }

  energies.forEach(row => row.forEach(energy => energy.flashed = false));
  return flashes;
}

function getNeighbourDirections(energy: Energy) {
  return [
    {row: energy.row - 1, column: energy.column},
    {row: energy.row + 1, column: energy.column},
    {row: energy.row, column: energy.column - 1},
    {row: energy.row, column: energy.column + 1},
    {row: energy.row + 1, column: energy.column + 1},
    {row: energy.row - 1, column: energy.column - 1},
    {row: energy.row + 1, column: energy.column - 1},
    {row: energy.row - 1, column: energy.column + 1},
  ];
}

function findFlashy(energies: Energy[][]): Energy | null {
  for (const row of energies)
    for (const energy of row)
      if (energy.value > 9 && !energy.flashed)
        return energy;
  return null;
}

export function convert(inputEnergies: string[]): Energy[][] {
  let outputEnergies: Energy[][] = [];

  inputEnergies.forEach((energies, row) => {
    outputEnergies[row] = [];
    for (let column = 0; column < energies.length; column++) {
      const value = parseInt(energies[column]);
      outputEnergies[row][column] = {row, column, value, flashed: false};
    }
  });

  return outputEnergies;
}