import {charMap, completionScoreMap, errorScoreMap, openChars, reverseCharMap} from "./day10.utils";

export function getSyntaxErrorScore(lines: string[]): number {
  return lines.reduce((score, line) => {
    const corruptChar = findCorruptedCharacter(line);
    return score + errorScoreMap.get(corruptChar)!;
  }, 0);
}

export function getSyntaxCompletionScore(lines: string[]): number {
  const scores = lines
    .map(line => getCompletionScore(line))
    .filter(score => score !== -1)
    .sort((s1, s2) => s1 - s2);

  return scores[Math.ceil(scores.length / 2) - 1];
}

export function getCompletionScore(line: string): number {
  const corruptedChar = findCorruptedCharacter(line);
  if (corruptedChar !== '') {
    return -1;
  }

  return findCompletionCharacters(line)
    .split('')
    .reduce((score, char) => score * 5 + completionScoreMap.get(char)!, 0);
}

export function findCompletionCharacters(line: string): string {
  let charStack: string[] = [];
  for (const char of line) {
    if (openChars.includes(char)) {
      charStack.push(char);
    } else {
      charStack = charStack.filter((_, idx) => idx !== charStack.length - 1);
    }
  }

  return charStack
    .reverse()
    .map(char => reverseCharMap.get(char))
    .join('');
}

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