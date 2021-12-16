const Graph = require('node-dijkstra'); // some cheat ;)

type Node = {
  row: number;
  column: number;
  value: number;
  nodes: Node[];
  visited: boolean;
  nodeHash: string;
}

export function calculateLowestRisk(cavern: string[], isGraphExtended: boolean = false): number {
  if (isGraphExtended) {
    cavern = extendGraph(cavern);
  }
  let {startNode, endNode, nodeMap} = buildGraph(cavern);

  const route = new Graph()
  nodeMap.forEach((node, nodeHash) => {
    let neighbourObj = {};
    // @ts-ignore
    node.nodes.forEach(neighbour => neighbourObj[neighbour.nodeHash] = neighbour.value);
    route.addNode(nodeHash, neighbourObj);
  });
  const pathHashes: string[] = route.path(startNode.nodeHash, endNode.nodeHash);

  return pathHashes.filter(hash => !(hash === '0,0'))
    .reduce((cost, hash) => cost + nodeMap.get(hash)!.value, 0);
}

function findMinimumPathCostWithDFS(currentNode: Node, endNode: Node): number {
  if (currentNode.row === endNode.row && currentNode.column === endNode.column) {
    return 0;
  }

  currentNode.visited = true;
  let minimumPathValue = Infinity;

  currentNode.nodes.forEach(node => {
    if (!node.visited) {
      const cost = findMinimumPathCostWithDFS(node, endNode);
      if (cost < Infinity) {
        minimumPathValue = Math.min(minimumPathValue, node.value + cost);
      }
    }
  });

  currentNode.visited = false;

  return minimumPathValue;
}

function buildGraph(cavern: string[]): { startNode: Node, endNode: Node, nodeMap: Map<string, Node> } {
  let nodeMap = new Map<string, Node>();
  cavern.forEach((line, row) => {
    for (let column = 0; column < line.length; column++) {
      let currentNode = getNode(row, column, parseInt(line[column]), nodeMap);

      const top = {value: cavern[row + 1] ? cavern[row + 1][column] : undefined, row: row + 1, column};
      const bottom = {value: cavern[row - 1] ? cavern[row - 1][column] : undefined, row: row - 1, column};
      const right = {value: line[column + 1], row, column: column + 1};
      const left = {value: line[column - 1], row, column: column - 1};

      [top, bottom, right, left].forEach(neighbour => {
        if (neighbour.value) {
          const node = getNode(neighbour.row, neighbour.column, parseInt(neighbour.value), nodeMap);
          currentNode.nodes.push(node);
        }
      });
    }
  });

  return {
    startNode: nodeMap.get('0,0')!,
    endNode: nodeMap.get(`${cavern.length - 1},${cavern[0].length - 1}`)!,
    nodeMap
  };
}

function extendGraph(cavern: string[]) {
  let newLines: string[] = [];
  [1, 2, 3, 4].forEach(addition => {
    cavern.forEach((line, _) => {
      const newLine = [...line]
        .map(char => Number(char))
        .map(value =>
          (value + addition) >= 10 ? ((value + addition) % 10) + 1 : (value + addition) % 10
        ).join('');
      newLines.push(newLine);
    });
  });
  cavern.push(...newLines);

  let newCavern: string[] = [];
  cavern.forEach((line, _) => {
    const values = [...line].map(char => Number(char));
    const extension = [1, 2, 3, 4].map(addition => {
      return values.map(value =>
        (value + addition) >= 10 ? ((value + addition) % 10) + 1 : (value + addition) % 10)
        .join('');
    }).join('');
    newCavern.push(`${line}${extension}`);
  });

  return newCavern;
}

function getNode(row: number, column: number, value: number, nodeMap: Map<string, Node>): Node {
  const nodeHash = `${row},${column}`;
  let node = nodeMap.get(nodeHash);
  if (!node) {
    node = {row, column, value, nodes: [], visited: false, nodeHash};
    nodeMap.set(nodeHash, node);
  }
  return node;
}
