export function countUniqueSegments(segments: string[]): number {
  let count = 0;
  segments.forEach(segment => {
    const outputs = segment.split('|')[1].split(' ');
    const filteredOutputs = outputs.filter(output => [2, 3, 4, 7].includes(output.length));
    count += filteredOutputs.length;
  });
  return count;
}