const TreeNode = require('./lib/bst').TreeNode;
const BinarySearchTree = require('./lib/bst').BinarySearchTree;

let nodes = [
  new TreeNode(4),
  new TreeNode(2),
  new TreeNode(1),
  new TreeNode(3),
  new TreeNode(6),
  new TreeNode(5),
  new TreeNode(7),
];
let bst = new BinarySearchTree();
for (let node of nodes) {
  bst.insert(node);
}

bst.remove(1);
bst.printTree();

// Build the following tree
//                       7
//
//               6
//
//                       5
//
//         4
//
//                       3
//
//               2
//
//                       1
//
