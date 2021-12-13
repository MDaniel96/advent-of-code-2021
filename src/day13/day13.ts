type Dot = {
  x: number;
  y: number;
}

type Instruction = {
  axis: string;
  value: number;
}

export function getDots(dots: string[], instructions: string[], firstFold: boolean = false): number {
  const dotSet = new Set<string>();

  for (const instructionStr of instructions) {
    const instruction = {axis: instructionStr.split('=')[0], value: parseInt(instructionStr.split('=')[1])};
    for (const dotStr of dots) {
      const dot = {x: parseInt(dotStr.split(',')[0]), y: parseInt(dotStr.split(',')[1])};
      const foldedDot = fold(dot, instruction);
      const foldedDotStr = foldedDot.x + ',' + foldedDot.y;
      dotSet.add(foldedDotStr);
    }
    if (firstFold) {
      return dotSet.size;
    }
  }

  return dotSet.size;
}

export function fold(dot: Dot, instruction: Instruction): Dot {
  if (instruction.axis === 'y') {
    if (dot.y < instruction.value) {
      return dot;
    }
    return {x: dot.x, y: instruction.value - (dot.y - instruction.value)};
  } else {
    if (dot.x < instruction.value) {
      return dot;
    }
    return {x: instruction.value - (dot.x - instruction.value), y: dot.y};
  }
}
