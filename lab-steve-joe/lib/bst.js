'use strict';

const bst = module.exports = {};

bst.TreeNode = class {
  constructor(value) {
    if (typeof value !== 'number')
      throw new TypeError('TreeNode value must be a number');

    this.value = value;
    this.right = this.left = null;
  }
};

bst.BinarySearchTree = class {
  constructor(root=null) {
    if (root && !(root instanceof bst.TreeNode))
      throw new TypeError('root must be a TreeNode');
    if (root && typeof root.value !== 'number')
      throw new TypeError('value on root must be a number');

    this.root = root;
  }

  insert(node) {
    // special case of empty bst
    if (this.root === null)
      this.root = node;
    else
      this._insert(this.root,node);
  }

  // insert helper
  _insert(root, node){
    if (node.value < root.value) {
      // go left when value < root.value
      if (!root.left)
        root.left = node;
      else
        this._insert(root.left, node);
    } else {
      // go right when value > root.value
      if (!root.right)
        root.right = node;
      else
        this._insert(root.right, node);
    }
  }

  find(value) {
    return this._find(this.root, value);
  }

  // find helper
  _find(root, value){
    if (!root)
      return null;
    else if (root.value === value)
      return root;
    else if (root.value < value)
      return this._find(root.right, value);
    else
      return this._find(root.left, value);
  }

  inOrderTraversal(cb) {
    if (!root) return null;
    this._inOrderTraversal(this.root, cb);
  }

  // inOrderTraversal helper
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

  // preOrderTraversal helper
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

  // postOrderTraversal helper
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
