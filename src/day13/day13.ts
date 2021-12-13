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
  dots.forEach(dotStr => dotSet.add(dotStr));

  for (const instructionStr of instructions) {
    const instruction = getInstruction(instructionStr);
    for (const dotStr of dotSet) {
      const foldedDot = fold(getDot(dotStr), instruction);
      const foldedDotStr = foldedDot.x + ',' + foldedDot.y;
      if (dotStr !== foldedDotStr) {
        dotSet.add(foldedDotStr);
        dotSet.delete(dotStr);
      }
    }
    if (firstFold) {
      return dotSet.size;
    }
  }

  printMessage(dotSet);
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

function printMessage(dotSet: Set<string>): void {
  let dots: Dot[] = [];
  dotSet.forEach(dotStr => dots.push(getDot(dotStr)));

  const maxX = Math.max.apply(Math, dots.map((d) => d.x));
  const maxY = Math.max.apply(Math, dots.map((d) => d.y));

  for (let y = 0; y <= maxY; y++) {
    for (let x = 0; x <= maxX; x++) {
      (dots.find(d => d.x === x && d.y === y)) ? process.stdout.write('#') : process.stdout.write('.');
    }
    process.stdout.write('\n');
  }
}

function getInstruction(instructionStr: string): Instruction {
  const split = instructionStr.split('=');
  return {axis: split[0], value: parseInt(split[1])};
}

function getDot(dotStr: string): Dot {
  const split = dotStr.split(',');
  return {x: parseInt(split[0]), y: parseInt(split[1])};
}
