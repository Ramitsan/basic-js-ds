const { NotImplementedError } = require('../extensions/index.js');

const { Node } = require('../extensions/list-tree.js');

/**
* Implement simple binary search tree according to task description
* using Node from extensions
*/

const addNode = (node, data) => {
  if (!node) {
    return new Node(data);
  }

 if (node.data === data) {
    return node;
  }

  if (data < node.data) {
    node.left = addNode(node.left, data);
  } else {
    node.right = addNode(node.right, data);
  }

  return node;
}

const removeNode = (node, data) => {
  if (!node) {
    return null;
  }

  if (data < node.data) {
    node.left = removeNode(node.left, data);
    return node;
  } else if (node.data < data) {
    node.right = removeNode(node.right, data);
    return node;
  } else {
    if (!node.left && !node.right) {
      return null;
    }
    if (!node.left) {
      node = node.right;
      return node;
    }
    if (!node.right) {
      node = node.left;
      return node;
    }

    let minFromRight = node.right;
    while (minFromRight.left) {
      minFromRight = minFromRight.left;
    }

    node.data = minFromRight.data;
    node.right = removeNode(node.right, minFromRight.data);

    return node;
  }
}

const searchData = (node, data) => {
  if (!node) {
    return null;
  }
 
  if (node.data === data) {
    return node;
  }

  return data < node.data ?
    searchData(node.left, data) :
    searchData(node.right, data);
}

class BinarySearchTree {
  constructor() {
    this._root = null;
  }

  root() {
    return this._root;
  }

  add(data) { 
   this._root = addNode(this._root, data);
  }

  has(data) {
    return !!this.find(data);
  }

  find(data) {  
    return searchData(this._root, data);
  }

  remove(data) {    
    this._root = removeNode(this._root, data);
  }

  min() {
    if (!this._root) {
      return null;
    }
    
    let node = this._root;
    while (node.left) {
      node = node.left;
    }
  
    return node.data;
  }

  max() {
    if (!this._root) {
      return null;
    }
   
    let node = this._root;
    while (node.right) {
      node = node.right;
    }
    return node.data;
  }
}

module.exports = {
  BinarySearchTree
};