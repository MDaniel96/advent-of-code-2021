type Node = {
  value: string;
  nodes: Node[];
  small: boolean;
  visitCount: number;
}

export function getPaths(caveConnections: string[], moreVisits: boolean = false): number {
  const {startNode, endNode} = buildGraph(caveConnections);
  let paths = [startNode];
  return countPaths(startNode, endNode, paths, moreVisits, false);
}

function countPaths(currentNode: Node, endNode: Node, path: Node[], moreVisits: boolean, doubleVisit: boolean): number {
  if (currentNode.value === endNode.value) {
    return 1;
  }

  currentNode.visitCount++;
  doubleVisit = !!path.find(node => node.small && node.visitCount >= 2);

  const paths = currentNode.nodes
    .filter(node => !moreVisits && !(node.small && node.visitCount > 0) ||
      moreVisits && ((!doubleVisit || !(node.small && node.visitCount > 0)) && node.value !== 'start'))
    .reduce((pathCount, node) =>
      pathCount + countPaths(node, endNode, [...path, node], moreVisits, doubleVisit), 0);
  currentNode.visitCount--;

  return paths;
}


function buildGraph(connections: string[]): { startNode: Node, endNode: Node } {
  let nodeMap = new Map<string, Node>();
  connections.forEach(connection => {
    let fromNodeValue = connection.split('-')[0];
    let fromNode = getNode(fromNodeValue, nodeMap);

    let toNodeValue = connection.split('-')[1];
    let toNode = getNode(toNodeValue, nodeMap);

    fromNode.nodes.push(toNode);
    toNode.nodes.push(fromNode);
  });

  return {startNode: nodeMap.get('start')!, endNode: nodeMap.get('end')!};
}

function getNode(nodeValue: string, nodeMap: Map<string, Node>) {
  let node = nodeMap.get(nodeValue);
  if (!node) {
    node = {
      value: nodeValue,
      nodes: [],
      small: nodeValue[0] === nodeValue[0].toLowerCase(),
      visitCount: 0
    };
    nodeMap.set(nodeValue, node);
  }
  return node;
}
