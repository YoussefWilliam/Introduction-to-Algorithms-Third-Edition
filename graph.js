class Graph {
  constructor() {
    this.numberOfNode = 0;
    this.adjacentList = {};
  }

  addVertex(node) {
    this.adjacentList[node] = [];
    this.numberOfNode += 1;
    return this;
  }
  addEdges(node1, node2) {
    if (this.adjacentList[node1]) {
      this.adjacentList[node1].push(node2);
    }
    if (this.adjacentList[node2]) {
      this.adjacentList[node2].push(node1);
    }
    return this;
  }
}

const myGraph = new Graph();

myGraph.addVertex("0");
myGraph.addVertex("1");
myGraph.addVertex("2");
myGraph.addVertex("3");
myGraph.addVertex("4");
myGraph.addVertex("5");
myGraph.addVertex("6");

myGraph.addEdges("3", "1");
myGraph.addEdges("3", "4");
myGraph.addEdges("4", "2");
myGraph.addEdges("4", "5");
myGraph.addEdges("1", "2");
myGraph.addEdges("1", "0");
myGraph.addEdges("0", "2");
myGraph.addEdges("6", "5");

console.log(myGraph);
