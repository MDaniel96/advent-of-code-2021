let errorScoreMap = new Map<string, number>();
errorScoreMap.set('', 0);
errorScoreMap.set(')', 3);
errorScoreMap.set(']', 57);
errorScoreMap.set('}', 1197);
errorScoreMap.set('>', 25137);

let completionScoreMap = new Map<string, number>();
completionScoreMap.set(')', 1);
completionScoreMap.set(']', 2);
completionScoreMap.set('}', 3);
completionScoreMap.set('>', 4);

const openChars = ['(', '<', '{', '['];
const closeChars = [')', '>', '}', ']'];

let charMap = new Map<string, string>();
openChars.forEach((openChar, index) => {
  charMap.set(closeChars[index], openChar);
});

let reverseCharMap = new Map<string, string>();
openChars.forEach((openChar, index) => {
  reverseCharMap.set(openChar, closeChars[index]);
});

export {errorScoreMap, completionScoreMap, openChars, closeChars, charMap, reverseCharMap};