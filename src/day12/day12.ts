type Node = {
  value: string;
  nodes: Node[];
  small: boolean;
  visited: boolean;
}

export function getPaths(caveConnections: string[]): number {
  const {startNode, endNode} = buildGraph(caveConnections);
  let paths = [startNode];
  return countPaths(startNode, endNode, paths);
}

function countPaths(currentNode: Node, endNode: Node, path: Node[]): number {
  if (currentNode.value === endNode.value) {
    return 1;
  }

  currentNode.visited = true;
  const paths = currentNode.nodes
    .filter(node => !(node.small && node.visited))
    .reduce((pathCount, node) => pathCount + countPaths(node, endNode, [...path, node]), 0);
  currentNode.visited = false;

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
      visited: false
    };
    nodeMap.set(nodeValue, node);
  }
  return node;
}
