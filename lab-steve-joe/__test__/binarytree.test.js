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


  describe('preOrderTraversal', () => {
    describe('Valid', () => {

    });

    describe('Invalid', () => {

    });
  });


  describe('inOrderTraversal', () => {
    describe('Valid', () => {

    });

    describe('Invalid', () => {

    });
  });


  describe('postOrderTraversal', () => {
    describe('Valid', () => {

    });

    describe('Invalid', () => {

    });
  });
});
