
"use strict";

// node class
class Node {
    constructor(data) {
        this.data = data;
        this.left = null;
        this.right = null;
    }
}

// bianry tree class
class BinaryTree {
    constructor() {
        this.root = null;
    }

    // insert a new node using level-order insertion.
    insert(data) {
        const newNode = new Node(data);

        // if the tree is empty, this becomes the root.
        if (this.root === null) {
            this.root = newNode;
            return;
        }

        // use a queue to visit nodes level by level.
        const queue = [this.root];

        while (queue.length > 0) {
            const current = queue.shift();

            // fill the left child first.
            if (current.left === null) {
                current.left = newNode;
                return;
            }

            queue.push(current.left);

            // then fill the right child.
            if (current.right === null) {
                current.right = newNode;
                return;
            }

            queue.push(current.right);
        }
    }

    // search for a value anywhere in the tree.
    search(target) {
        if (this.root === null) {
            return false;
        }

        const queue = [this.root];

        while (queue.length > 0) {
            const current = queue.shift();

            if (current.data === target) {
                return true;
            }

            if (current.left !== null) {
                queue.push(current.left);
            }

            if (current.right !== null) {
                queue.push(current.right);
            }
        }

        return false;
    }

    // count all nodes in the tree.
    countNodes(node = this.root) {
        if (node === null) {
            return 0;
        }

        return (
            1 +
            this.countNodes(node.left) +
            this.countNodes(node.right)
        );
    }

    // height measured in edges.
    // empty tree: -1; leaf node: 0.
    height(node = this.root) {
        if (node === null) {
            return -1;
        }

        return 1 + Math.max(
            this.height(node.left),
            this.height(node.right)
        );
    }

    // sum of numeric node values.
    sum(node = this.root) {
        if (node === null) {
            return 0;
        }

        return (
            node.data +
            this.sum(node.left) +
            this.sum(node.right)
        );
    }

    // nodes in level order.
    levelOrder() {
        if (this.root === null) {
            console.log("Tree is empty.");
            return;
        }

        const queue = [this.root];
        const result = [];

        while (queue.length > 0) {
            const current = queue.shift();
            result.push(current.data);

            if (current.left !== null) {
                queue.push(current.left);
            }

            if (current.right !== null) {
                queue.push(current.right);
            }
        }

        console.log(result.join(" "));
    }

    // tree rotated sideways.
    printTree(node = this.root, space = 0, gap = 5) {
        if (node === null) {
            return;
        }

        space += gap;

        this.printTree(node.right, space, gap);

        console.log(
            " ".repeat(space - gap) + node.data
        );

        this.printTree(node.left, space, gap);
    }
}

// testing binary tree
const tree = new BinaryTree();

[10, 20, 30, 40, 50, 60, 70].forEach(value => {
    tree.insert(value);
});

console.log("Level-order traversal:");
tree.levelOrder();

console.log("\nTree diagram (sideways):");
tree.printTree();

console.log("\nNumber of nodes:", tree.countNodes());
console.log("Height in edges:", tree.height());
console.log("Sum of values:", tree.sum());

console.log("Search for 50:", tree.search(50));
console.log("Search for 99:", tree.search(99));
