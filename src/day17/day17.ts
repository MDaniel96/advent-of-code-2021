export type Point = {
  x: number;
  y: number;
}

export type Destination = {
  minX: number;
  maxX: number;
  minY: number;
  maxY: number;
}

export function findHighestValue({minX, maxX, minY, maxY}: Destination): number {
  const endY = 500; // random range

  let globalMaxHeight = 0;
  for (let vX = 0; vX < maxX; vX++) {
    if ((vX * (vX + 1)) / 2 < minX) continue;
    for (let vY = 0; vY < endY; vY++) {
      let localMaxHeight = 0;
      let hit = false;
      let velocity: Point = {x: vX, y: vY};
      let current: Point = {x: 0, y: 0};
      while (current.x < maxX && current.y > minY) {
        current.x += velocity.x;
        current.y += velocity.y;
        if (current.y > localMaxHeight) localMaxHeight = current.y;
        if ((current.x >= minX && current.x <= maxX) && (current.y >= minY && current.y <= maxY)) hit = true;
        velocity.x = velocity.x === 0 ? 0 : velocity.x - 1;
        velocity.y--;
      }
      if (hit && localMaxHeight > globalMaxHeight) globalMaxHeight = localMaxHeight;
    }
  }

  return globalMaxHeight;
}

export function findPossibleVelocities({minX, maxX, minY, maxY}: Destination): number {
  const endY = 500; // random range

  let velocityCount = 0;
  for (let vX = 0; vX <= maxX; vX++) {
    if ((vX * (vX + 1)) / 2 < minX) continue;
    for (let vY = minY; vY <= endY; vY++) {
      let hit = false;
      let velocity: Point = {x: vX, y: vY};
      let current: Point = {x: 0, y: 0};
      while (current.x < maxX && current.y > minY) {
        current.x += velocity.x;
        current.y += velocity.y;
        if ((current.x >= minX && current.x <= maxX) && (current.y >= minY && current.y <= maxY)) hit = true;
        velocity.x = velocity.x === 0 ? 0 : velocity.x - 1;
        velocity.y--;
      }
      if (hit) velocityCount++;
    }
  }

  return velocityCount;
}
