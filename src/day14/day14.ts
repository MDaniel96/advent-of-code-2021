export function calculateQuantityDifference(template: string, rules: string[], steps: number): number {
  const pairOccurrences = new Map<string, number>();
  for (let i = 1; i < template.length; i++) {
    const char = `${template[i - 1]}${template[i]}`;
    const occurrence = pairOccurrences.get(char) ? pairOccurrences.get(char)! : 0;
    pairOccurrences.set(char, occurrence + 1);
  }

  const insertions = new Map<string, string>();
  rules.forEach(rule => insertions.set(rule.split('->')[0], rule.split('->')[1]));

  for (let step = 1; step <= steps; step++) {
    let newPairs: string[] = [];
    pairOccurrences.forEach((occurrence, pair) => {
      let insertion = insertions.get(pair);
      if (insertion) {
        for (let i = 0; i < occurrence; i++) {
          if ((pairOccurrences.get(pair)!) > 0) {
            pairOccurrences.set(pair, pairOccurrences.get(pair)! - 1);
          }
          newPairs.push(...[`${pair[0]}${insertion}`, `${insertion}${pair[1]}`]);
        }
      }
    });

    newPairs.forEach(pair => {
      const occurrence = pairOccurrences.get(pair) ? pairOccurrences.get(pair)! : 0;
      pairOccurrences.set(pair, occurrence + 1);
    });
  }

  const charOccurrences = getCharOccurrences(pairOccurrences, template);
  return Math.max(...charOccurrences.values()) - Math.min(...charOccurrences.values());
}

function getCharOccurrences(pairOccurrences: Map<string, number>, template: string) {
  const charOccurrences = new Map<string, number>();
  pairOccurrences.forEach((occurrence, pair) => {
    if (occurrence > 0) {
      for (const char of pair) {
        const charOccurrence = charOccurrences.get(char) ? charOccurrences.get(char)! : 0;
        charOccurrences.set(char, charOccurrence + occurrence);
      }
    }
  });
  charOccurrences.forEach((occurrence, char) => {
    if (char === template[0] || char === template[template.length - 1]) {
      charOccurrences.set(char, (occurrence + 1) / 2);
    } else {
      charOccurrences.set(char, occurrence / 2);
    }
  });
  return charOccurrences;
}
