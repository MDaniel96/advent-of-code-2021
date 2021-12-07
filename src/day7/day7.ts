export function calculateLeastFuel(positions: number[]): number {
  const medianPosition = median(positions);
  return positions.reduce((sum, position) => {
    return sum + Math.abs(position - medianPosition);
  }, 0);
}

export function median(values: number[]): number {
  values.sort((v1, v2) => v1 - v2);
  return values[Math.floor((values.length - 1) / 2)];
}
