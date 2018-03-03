const TreeNode = require('../lib/bst').TreeNode;
const BinarySearchTree = require('../lib/bst').BinarySearchTree;
require('jest');

describe('TreeNode', function() {
  describe('#constructor', () => {
    describe('Valid', () => {
      it('should create a new TreeNode and set the value 10 on the value property', () => {
        const node = new TreeNode(10);
        expect(node.value).toEqual(10);
      });

      it('should set the left child property to null', () => {
        const node = new TreeNode(10);
        expect(node.left).toBeNull();
      });

      it('should set the right child property to null', () => {
        const node = new TreeNode(10);
        expect(node.right).toBeNull();
      });
    });

    describe('Invalid', () => {
      it('should throw a TypeError if the value is not a number', () => {
        expect(() => new TreeNode('not a number')).toThrow('TreeNode value must be a number');
      });
    });
  });
});

describe('BinarySearchTree', function () {
  describe('#constructor', () => {
    describe('Valid', () => {
      it('should create a Binary Search Tree and set the root to null when no root was provided', () => {
        let bst = new BinarySearchTree();
        expect(bst.root).toBeNull();
      });

      it('should create a new BinarySearchTree and return it back', () => {
        let bst = new BinarySearchTree();
        expect(bst).toBeInstanceOf(BinarySearchTree);
      });

      it('should optionally set a root node passed in at creation time', () => {
        const node = new TreeNode(100);
        const bst = new BinarySearchTree(node);
        expect(bst.root).toEqual(node);
      });
    });

    describe('Invalid', () => {
      it('should detect a non TreeNode root provided and throw a TypeError', () => {
        expect(() => new BinarySearchTree('not a TreeNode')).toThrow('root must be a TreeNode');
      });

      it('should detect a root with a non integer value and throw a TypeError', () => {
        let node = new TreeNode(0);
        node.value = 'not a number';
        expect(() => new BinarySearchTree(node)).toThrow('value on root must be a number');
      });
    });
  });


  describe('insert', () => {
    describe('Valid', () => {

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
      it('should have set the root value to be 4', () => {
        expect(bst.root.value).toEqual(4);
      });

      it('should have properly built the left subtree', () => {
        // left subtree
        expect(bst.root.left.value).toEqual(2);
        expect(bst.root.left.right.value).toEqual(3);
        expect(bst.root.left.left.value).toEqual(1);
      });

      it('should have propertly built the right subtree', () => {
        // right subtree
        expect(bst.root.right.value).toEqual(6);
        expect(bst.root.right.left.value).toEqual(5);
        expect(bst.root.right.right.value).toEqual(7);
      });
    });

    describe('Invalid', () => {
      it('should detect a non-TreeNode value being inserted and throw a TypeError', () => {
        let bst = new BinarySearchTree();
        expect(() => bst.insert('not a TreeNode')).toThrow('node must be a TreeNode');
      });

      it('should throw a TypeError if the nodes value being inserted is not a number', () => {
        let bst = new BinarySearchTree();
        let node = new TreeNode(10);
        // re-assign the value
        node.value = 'not a number';
        expect(() => bst.insert(node)).toThrow('node.value must be a number');
      });
    });
  });

  describe('preOrderTraversal', () => {
    describe('Valid', () => {

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
      let values = [];
      bst.preOrderTraversal(item => values.push(item));

      it('should push all the values in a PreOrder fashion', () => {
        expect(values).toEqual([4, 2, 1, 3, 6, 5, 7]);
      });

      it('should have pushed all items from the BinarySearchTree into the array', () => {
        expect(nodes.length).toEqual(values.length);
      });
    });

    describe('Invalid', () => {
      it('should detect an empty BinarySearchTree and return null', () => {
        let bst = new BinarySearchTree();
        let values = [];
        expect(bst.inOrderTraversal(value => values.push(value))).toBeNull();
        expect(values).toEqual([]);
      });

      it('should detect a non-function passed in for the callback and throw a TypeError', () => {
        let bst = new BinarySearchTree(new TreeNode(100));
        let values = [];
        /* shut up the linter */
        values;
        expect(() => bst.inOrderTraversal('not a function at all')).toThrow('cb must be a function');
      });
    });
  });


  describe('inOrderTraversal', () => {
    describe('Valid', () => {

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
      let values = [];
      bst.inOrderTraversal(item => values.push(item));

      it('should push all the values in an InOrder fashion', () => {
        expect(values).toEqual([1, 2, 3, 4, 5, 6, 7]);
      });

      it('should have pushed all items from the BinarySearchTree into the array', () => {
        expect(nodes.length).toEqual(values.length);
      });
    });

    describe('Invalid', () => {
      it('should detect an empty BinarySearchTree and return null', () => {
        let bst = new BinarySearchTree();
        let values = [];
        expect(bst.inOrderTraversal(value => values.push(value))).toBeNull();
        expect(values).toEqual([]);
      });

      it('should detect a non-function passed in for the callback and throw a TypeError', () => {
        let bst = new BinarySearchTree(new TreeNode(100));
        let values = [];
        /* shut up the linter */
        values;
        expect(() => bst.inOrderTraversal('not a function at all')).toThrow('cb must be a function');
      });
    });
  });


  describe('postOrderTraversal', () => {
    describe('Valid', () => {

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
      let values = [];
      bst.postOrderTraversal(item => values.push(item));

      it('should push all the values in a PostOrder fashion', () => {
        expect(values).toEqual([1, 3, 2, 5, 7, 6, 4]);
      });

      it('should have pushed all items from the BinarySearchTree into the array', () => {
        expect(nodes.length).toEqual(values.length);
      });
    });

    describe('Invalid', () => {
      it('should detect an empty BinarySearchTree and return null', () => {
        let bst = new BinarySearchTree();
        let values = [];
        expect(bst.inOrderTraversal(value => values.push(value))).toBeNull();
        expect(values).toEqual([]);
      });

      it('should detect a non-function passed in for the callback and throw a TypeError', () => {
        let bst = new BinarySearchTree(new TreeNode(100));
        let values = [];
        /* shut up the linter */
        values;
        expect(() => bst.inOrderTraversal('not a function at all')).toThrow('cb must be a function');
      });
    });
  });
});
