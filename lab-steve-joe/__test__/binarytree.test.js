const TreeNode = require('../lib/bst').TreeNode;
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
