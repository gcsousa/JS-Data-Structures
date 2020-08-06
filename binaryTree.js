// This module will review the creation and use of the binary tree data structure
// in Javascript.  We get to use recursion for this one...Yeah

function Node(value, left, right) {
    this.value = value;
    this.left = left;
    this.left = right;
}

function BinaryTree() {
    this.head = null;
}

BinaryTree.prototype.addNode = function (val) {
    // Creates an new node, then adds the node in the tree in the correct place
    let newNode = new Node(val, null, null);
    // if tree is empy simply create node and set left and right to null;
    if (!this.head) this.head = newNode;

}

BinaryTree.prototype.search = function (start, val) {

}

let BT = new BinaryTree();


console.log(BT);
BT.addNode(20);
console.log(BT);

// Factorial Exmaple
function factorial(x) {
    if (x === 1) {  // base case
        return x;
    } else {  // recursive case
        return x * factorial(x - 1);
    }
}

console.log(factorial(4));