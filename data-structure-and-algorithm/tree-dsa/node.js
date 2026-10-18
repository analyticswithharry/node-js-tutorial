
"use strict";
// basic node structure for a binary tree.
class Node {
    constructor(data) {
        this.data = data;
        this.left = null;
        this.right = null;
    }
}

// create three nodes.
const root = new Node(10);
const leftChild = new Node(5);
const rightChild = new Node(20);

// connect the nodes to form a tree.
root.left = leftChild;
root.right = rightChild;

// tree structure.
console.log("Root:", root.data);
console.log("Left child:", root.left.data);
console.log("Right child:", root.right.data);

// complete root node.
console.log(root);
