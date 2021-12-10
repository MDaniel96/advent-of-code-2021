let scoreMap = new Map<string, number>();
scoreMap.set('', 0);
scoreMap.set(')', 3);
scoreMap.set(']', 57);
scoreMap.set('}', 1197);
scoreMap.set('>', 25137);

export function getSyntaxErrorScore(lines: string[]): number {
  return lines.reduce((score, line) => {
    const corruptChar = findCorruptedCharacter(line);
    return score + scoreMap.get(corruptChar)!;
  }, 0);
}

const openChars = ['(', '<', '{', '['];
const closeChars = [')', '>', '}', ']'];

let charMap = new Map<string, string>();
openChars.forEach((openChar, index) => {
  charMap.set(closeChars[index], openChar);
});

export function findCorruptedCharacter(line: string): string {
  let charStack: string[] = [];
  for (const char of line) {
    if (openChars.includes(char)) {
      charStack.push(char);
    } else {
      const lastOpenChar = charStack[charStack.length - 1];
      const neededOpenChar = charMap.get(char);
      if (lastOpenChar !== neededOpenChar) {
        return char;
      }
      charStack = charStack.filter((_, idx) => idx !== charStack.length - 1);
    }
  }

  return '';
}