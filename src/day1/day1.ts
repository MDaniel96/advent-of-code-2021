export function countIncreases(measurements: number[]): number {
  return measurements.reduce((count, measurement, index) => {
    return measurement < measurements[index + 1] ? count + 1 : count;
  }, 0);
}

export function countIncreasesUsingWindows(measurements: number[]): number {
  return measurements.reduce((count, measurement, index) => {
    return getWindowSize(measurements, index) < getWindowSize(measurements, index + 1) ? count + 1 : count;
  }, 0);
}

function getWindowSize(measurements: number[], index: number): number {
  return measurements[index] + measurements[index + 1] + measurements[index + 2];
}
