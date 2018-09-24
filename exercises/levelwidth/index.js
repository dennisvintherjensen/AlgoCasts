// --- Directions
// Given the root node of a tree, return
// an array where each element is the width
// of the tree at each level.
// --- Example
// Given:
//     0
//   / |  \
// 1   2   3
// |       |
// 4       5
// Answer: [1, 3, 2]

function levelWidth(root) {
  // Array to hold the width of each level
  const levels = [0];
  const nodes = [root, 's'];
  while (nodes.length > 1) {
    let node = nodes.shift();
    if (node === 's') {
      levels.push(0);
      nodes.push('s');
    } else {
      levels[levels.length - 1]++;
      nodes.push(...node.children);
    }
  }
  return levels;
}

module.exports = levelWidth;
