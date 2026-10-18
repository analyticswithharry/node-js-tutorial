
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

console.log(root.data);
console.log(root.left.data);
console.log(root.right.data);
