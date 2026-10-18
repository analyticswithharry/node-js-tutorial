"use strict";

class Node {
    constructor(data) {
        this.data = data;
        this.left = null;
        this.right = null;
    }
}

const root = new Node(1);

root.left = new Node(2);
root.right = new Node(3);
root.left.left = new Node(4);
root.left.right = new Node(5);
root.right.left = new Node(6);
root.right.right = new Node(7);

// preorder: root, left, right
function preorderRecursive(node, result = []) {
    if (node === null) return result;

    result.push(node.data);
    preorderRecursive(node.left, result);
    preorderRecursive(node.right, result);

    return result;
}

function preorderIterative(root) {
    if (root === null) return [];

    const result = [];
    const stack = [root];

    while (stack.length > 0) {
        const node = stack.pop();
        result.push(node.data);

        // push right first to visit left first
        if (node.right !== null) stack.push(node.right);
        if (node.left !== null) stack.push(node.left);
    }

    return result;
}

// inorder: left, root, right
function inorderRecursive(node, result = []) {
    if (node === null) return result;

    inorderRecursive(node.left, result);
    result.push(node.data);
    inorderRecursive(node.right, result);

    return result;
}

function inorderIterative(root) {
    const result = [];
    const stack = [];
    let current = root;

    while (current !== null || stack.length > 0) {
        while (current !== null) {
            stack.push(current);
            current = current.left;
        }

        current = stack.pop();
        result.push(current.data);
        current = current.right;
    }

    return result;
}

// postorder: left, right, root
function postorderRecursive(node, result = []) {
    if (node === null) return result;

    postorderRecursive(node.left, result);
    postorderRecursive(node.right, result);
    result.push(node.data);

    return result;
}

function postorderIterative(root) {
    if (root === null) return [];

    const result = [];
    const stack = [root];

    while (stack.length > 0) {
        const node = stack.pop();
        result.push(node.data);

        if (node.left !== null) stack.push(node.left);
        if (node.right !== null) stack.push(node.right);
    }

    // reverse root-right-left to get left-right-root
    return result.reverse();
}

// level order: visit nodes level by level
function levelOrder(root) {
    if (root === null) return [];

    const result = [];
    const queue = [root];
    let head = 0;

    while (head < queue.length) {
        const node = queue[head++];
        result.push(node.data);

        if (node.left !== null) queue.push(node.left);
        if (node.right !== null) queue.push(node.right);
    }

    return result;
}

function levelOrderByLevel(root) {
    if (root === null) return [];

    const result = [];
    const queue = [root];
    let head = 0;

    while (head < queue.length) {
        const levelSize = queue.length - head;
        const currentLevel = [];

        for (let i = 0; i < levelSize; i++) {
            const node = queue[head++];
            currentLevel.push(node.data);

            if (node.left !== null) queue.push(node.left);
            if (node.right !== null) queue.push(node.right);
        }

        result.push(currentLevel);
    }

    return result;
}

console.log("preorder recursive:  ", preorderRecursive(root));
console.log("preorder iterative:  ", preorderIterative(root));
console.log("inorder recursive:   ", inorderRecursive(root));
console.log("inorder iterative:   ", inorderIterative(root));
console.log("postorder recursive: ", postorderRecursive(root));
console.log("postorder iterative: ", postorderIterative(root));
console.log("level order:         ", levelOrder(root));
console.log("level order by level:", levelOrderByLevel(root));
