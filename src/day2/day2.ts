export type Command = {
  direction: string;
  unit: number;
}

export type Position = {
  horizontal: number;
  depth: number;
}

export function getPosition(commands: Command[]): Position {
  let position = {horizontal: 0, depth: 0};

  commands.forEach(command => {
    switch (command.direction) {
      case 'forward':
        position.horizontal += command.unit;
        break;
      case 'up':
        position.depth -= command.unit;
        break;
      case 'down':
        position.depth += command.unit;
    }
  });

  return position;
}

export function getPositionUsingAim(commands: Command[]): Position {
  let aim = 0;
  let position = {horizontal: 0, depth: 0};

  commands.forEach(command => {
    switch (command.direction) {
      case 'forward':
        position.horizontal += command.unit;
        position.depth += command.unit * aim;
        break;
      case 'up':
        aim -= command.unit;
        break;
      case 'down':
        aim += command.unit;
    }
  });

  return position;
}

export function processCommands(commands: string[]): Command[] {
  return commands.map(command => {
    const direction = command.split(' ')[0];
    const unit = parseInt(command.split(' ')[1]);
    return {direction, unit}
  });
}
