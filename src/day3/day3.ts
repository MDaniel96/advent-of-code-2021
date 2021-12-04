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

export function calculateLifeConsumption(diagnostics: string[]): Consumption {
  let gammaDiagnostics = diagnostics;
  let epsilonDiagnostics = diagnostics;

  for (let i = 0; i < diagnostics[0].length; i++) {
    if (gammaDiagnostics.length !== 1) {
      let gammaFrequency = getFrequency(gammaDiagnostics, i);
      gammaDiagnostics = gammaDiagnostics.filter(diagnostic => {
        return (diagnostic[i] === '1' && gammaFrequency >= 0) || (diagnostic[i] === '0' && gammaFrequency < 0)
      });
    }

    if (epsilonDiagnostics.length !== 1) {
      let epsilonFrequency = getFrequency(epsilonDiagnostics, i);
      epsilonDiagnostics = epsilonDiagnostics.filter(diagnostic => {
        return (diagnostic[i] === '1' && epsilonFrequency < 0) || (diagnostic[i] === '0' && epsilonFrequency >= 0)
      });
    }
  }

  return {gamma: gammaDiagnostics[0], epsilon: epsilonDiagnostics[0]}
}

function getFrequency(diagnostics: string[], frequencyIndex: number): number {
  let frequency = 0;
  diagnostics.forEach(diagnostic => {
    diagnostic[frequencyIndex] === '1' ? frequency++ : frequency--;
  });
  return frequency;
}
