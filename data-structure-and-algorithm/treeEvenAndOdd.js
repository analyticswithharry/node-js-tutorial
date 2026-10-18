
class Node {
    constructor(data) {
        this.data = data;
        this.left = null;
        this.right = null;
    }
}

const root = new Node(10);

root.left = new Node(5);
root.right = new Node(12);

root.left.left = new Node(2);
root.left.right = new Node(7);

root.right.left = new Node(8);
root.right.right = new Node(15);

function countEvenOdd(node) {
    if (node === null) {
        return { even: 0, odd: 0 };
    }

    let result = { even: 0, odd: 0 };

    if (node.data % 2 === 0) {
        result.even++;
    } else {
        result.odd++;
    }

    const leftResult = countEvenOdd(node.left);
    const rightResult = countEvenOdd(node.right);

    result.even += leftResult.even + rightResult.even;
    result.odd += leftResult.odd + rightResult.odd;

    return result;
}

const result = countEvenOdd(root);

console.log("Even numbers:", result.even);
console.log("Odd numbers:", result.odd);
