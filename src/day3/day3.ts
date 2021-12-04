export type Consumption = {
  gamma: string;
  epsilon: string;
}

export function calculateConsumption(diagnostics: string[]): Consumption {
  let frequencies = Array.from({length: diagnostics[0].length}, _ => 0)

  diagnostics.forEach(diagnostic => {
    [...diagnostic].forEach((character, index) => {
      character === '1' ? frequencies[index]++ : frequencies[index]--;
    });
  });

  const gamma = frequencies.map(frequency => frequency > 0 ? 1 : 0).join('');
  const epsilon = frequencies.map(frequency => frequency < 0 ? 1 : 0).join('');

  return {gamma, epsilon}
}