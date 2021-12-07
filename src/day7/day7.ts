export function calculateLeastFuel(positions: number[]): number {
  const medianPosition = median(positions);
  return positions.reduce((sum, position) => {
    return sum + Math.abs(position - medianPosition);
  }, 0);
}

export function calculateLeastFuelUsingConsumption(positions: number[]): number {
  positions.sort((p1, p2) => p1 - p2);

  let minFuel = Number.MAX_VALUE;
  for (let pos = positions[0]; pos <= positions[positions.length - 1]; pos++) {
    const fuel = positions.reduce((sum, position) => {
      return sum + consumption(Math.abs(position - pos));
    }, 0);
    if (fuel < minFuel) minFuel = fuel;
  }

  return minFuel;
}

export function median(values: number[]): number {
  values.sort((v1, v2) => v1 - v2);
  return values[Math.floor((values.length - 1) / 2)];
}

export function consumption(distance: number): number {
  return distance * (1 + distance) / 2;
}
