// --- Directions
// 1) Create a node class.  The constructor
// should accept an argument that gets assigned
// to the data property and initialize an
// empty array for storing children. The node
// class should have methods 'add' and 'remove'.
// 2) Create a tree class. The tree constructor
// should initialize a 'root' property to null.
// 3) Implement 'traverseBF' and 'traverseDF'
// on the tree class.  Each method should accept a
// function that gets called with each element in the tree

class Node {
  constructor(data) {
    this.data = data;
    this.children = [];
  }
  add(data) {
    this.children.push(new Node(data));
  }
  remove(data) {
    // 1 - filter will iterate entire array
    // so 2 below should be more efficient
    this.children = this.children.filter(child => !child.data === data);

    // 2
    // for (let i = 0; i < this.children.length; i++) {
    //   if (this.children[i].data === data) {
    //     this.children.splice(i, 1);
    //     break;
    //   }
    // }
  }
}

class Tree {
  constructor() {
    this.root = null;
  }
  traverseBF(fn) {
    if (!this.root) {
      return;
    }
    const nodes = [this.root];
    while (nodes.length) {
      let node = nodes.shift();
      nodes.push(...node.children);
      fn(node);
    }
  }
  traverseDF(fn) {
    const nodes = [this.root];
    while (nodes.length) {
      let node = nodes.shift();
      nodes.unshift(...node.children);
      fn(node);
    }
  }
}

module.exports = { Tree, Node };
