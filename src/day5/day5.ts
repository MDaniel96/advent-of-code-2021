export type Point = {
  x: number;
  y: number;
}

export function calculateOverlaps(lines: string[], detectDiagonals: boolean = false): number {
  let pointCount = new Map<string, number>();
  lines.forEach(line => {
    const points = parseLine(line);
    if (points[0].x === points[1].x) {
      const pointFrom = points[0].y < points[1].y ? points[0] : points[1];
      const pointTo = points[0].y > points[1].y ? points[0] : points[1];
      for (let y = pointFrom.y; y <= pointTo.y; y++) {
        countOverlappingPoints(pointFrom.x, y, pointCount);
      }
    } else if (points[0].y === points[1].y) {
      const pointFrom = points[0].x < points[1].x ? points[0] : points[1];
      const pointTo = points[0].x > points[1].x ? points[0] : points[1];
      for (let x = pointFrom.x; x <= pointTo.x; x++) {
        countOverlappingPoints(x, pointFrom.y, pointCount);
      }
    } else if (detectDiagonals) {
      const fromX = points[0].x < points[1].x ? points[0] : points[1];
      const toX = points[0].x > points[1].x ? points[0] : points[1];
      let yIncrement = fromX.y < toX.y ? 1 : -1;
      let fromY = fromX.y;
      for (let x = fromX.x; x <= toX.x; x++) {
        countOverlappingPoints(x, fromY, pointCount);
        fromY += yIncrement;
      }
    }
  });

  let overlaps = 0;
  pointCount.forEach((value) => {
    if (value > 1) overlaps++;
  });

  return overlaps;
}

function countOverlappingPoints(x: number, y: number, pointCount: Map<string, number>) {
  const point = JSON.stringify({x, y});
  if (pointCount.has(point)) {
    pointCount.set(point, pointCount.get(point)! + 1);
  } else {
    pointCount.set(point, 1);
  }
}

export function parseLine(line: string): Point[] {
  let points: Point[] = [];
  line.split("->").forEach(point => {
    points.push({
      x: parseInt(point.split(',')[0]),
      y: parseInt(point.split(',')[1])
    });
  });
  return points;
}
