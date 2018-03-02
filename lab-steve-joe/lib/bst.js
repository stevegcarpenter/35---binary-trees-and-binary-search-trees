'use strict';

const bst = module.exports = {};

bst.TreeNode = class {
  constructor(value, left=null, right=null) {
    if (left && !(left instanceof bst.TreeNode))
      throw new TypeError('left argument must be of type TreeNode');
    if (right && !(right instanceof bst.TreeNode))
      throw new TypeError('right argument must be of type TreeNode');

    this.value = value;
    this.left = left;
    this.right = right;
  }
};

bst.BinarySearchTree = class {
  constructor(root=null) {
    this.root = root;
  }

  inOrderTraversal(cb) {
    if (!root) return null;
    this._inOrderTraversal(this.root, cb);
  }

  _inOrderTraversal(root, cb) {
    if (!root) return null;

    // visit left
    this._inOrderTraversal(root.left);
    // visit root
    cb(this.value);
    // visit right
    this._inOrderTraversal(root.right);
  }

  preOrderTraversal(cb) {
    if (!root) return null;
    this._preOrderTraversal(this.root, cb);
  }

  _preOrderTraversal(root, cb) {
    if (!root) return null;

    // visit root
    cb(this.value);
    // visit left
    this._preOrderTraversal(root.left);
    // visit right
    this._preOrderTraversal(root.right);
  }

  postOrderTraversal(cb) {
    if (!root) return null;
    this._postOrderTraversal(this.root, cb);
  }

  _postOrderTraversal(root, cb) {
    if (!root) return null;

    // visit left
    this._postOrderTraversal(root.left);
    // visit right
    this._postOrderTraversal(root.right);
    // visit root
    cb(this.value);
  }
};
