const TreeNode = require('../lib/bst').TreeNode;
require('jest');

describe('TreeNode', function() {
  describe('#constructor', () => {
    describe('Valid', () => {
      it('should create a new TreeNode and set the value 10 on the value property', () => {
        const node = new TreeNode(10);
        expect(node.value).toEqual(10);
      });

      it('should set both left and right properties to null if not provided a value', () => {
        const node = new TreeNode(10);
        expect(node.left).toBeNull();
      });

      it('should set the left and right properties to a tree node if provided', () => {
        const node = new TreeNode(1, new TreeNode(2), new TreeNode(3));
        expect(node.left.value).toEqual(2);
        expect(node.right.value).toEqual(3);
      });
    });
    describe('Invalid', () => {
      it('should throw an error if the left child propertie is not a TreeNode', () => {
        expect(() => new TreeNode(1, 'not a node')).toThrow('left argument must be of type TreeNode');
      });

      it('should throw an error if the right child propertie is not a TreeNode', () => {
        expect(() => new TreeNode(1, null, 'not a node')).toThrow('right argument must be of type TreeNode');
      });
    });
  });
});

describe('BinarySearchTree', function () {
  describe('', () => {
    describe('Valid', () => {

    });

    describe('Invalid', () => {

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
