type Energy = {
  row: number;
  column: number;
  value: number;
  flashed: boolean;
}

export function getFlashes(inputEnergies: string[], steps: number = 100): number {
  let flashes = 0;
  const energies = convert(inputEnergies);

  for (let step = 0; step < steps; step++) {
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
  }

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