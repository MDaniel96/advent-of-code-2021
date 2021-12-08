export function countUniqueSegments(segments: string[]): number {
  let count = 0;
  segments.forEach(segment => {
    const outputs = segment.split('|')[1].split(' ');
    const filteredOutputs = outputs.filter(output => [2, 3, 4, 7].includes(output.length));
    count += filteredOutputs.length;
  });
  return count;
}

export function calculateOutputSum(inputs: string[]): number {
  let result = 0;

  inputs.forEach(input => {
    let outputSum = '';

    let numbers = new Map<number, string>();
    const combinations = input.split('|')[0].split(' ');
    combinations.sort((a, b) => a.length - b.length);
    combinations.forEach(combination => {
      combination = combination.split('').sort().join('');
      switch (combination.length) {
        case 2:
          numbers.set(1, combination);
          break;
        case 3:
          numbers.set(7, combination);
          break;
        case 4:
          numbers.set(4, combination);
          break;
        case 5: {
          if (match(combination, numbers.get(7)!) === 3)
            numbers.set(3, combination)
          else if (match(combination, numbers.get(4)!) === 2)
            numbers.set(2, combination)
          else
            numbers.set(5, combination);
          break;
        }
        case 6: {
          if (match(combination, numbers.get(4)!) === 4)
            numbers.set(9, combination)
          else if (match(combination, numbers.get(7)!) === 3)
            numbers.set(0, combination)
          else
            numbers.set(6, combination);
          break;
        }
        case 7:
          numbers.set(8, combination);
          break;
      }
    });

    let outputs = input.split('|')[1].split(' ');
    outputs.forEach(output => {
      output = output.split('').sort().join('');
      outputSum += getByValue(numbers, output)!;
    });

    result += parseInt(outputSum);
  });

  return result;
}

function match(combination: string, found: string): number {
  let matches = 0;
  for (const char of combination) {
    if (found.includes(char)) matches++;
  }
  return matches;
}

function getByValue(map: Map<number, string>, searchValue: string) {
  for (let [key, value] of map.entries()) {
    if (value === searchValue)
      return key;
  }
}