// This module will review the creation and use of the binary tree data structure
// in Javascript.  We get to use recursion for this one...Yeah

// You can think of a binary tree as a hiararchy of binary trees (recursive I know)

function BinaryTree(val) {
    this.value = val;
    this.left = null;
    this.right = null;
}

BinaryTree.prototype.insert = function (val) {

    // if new val is <= than current node move down and left
    if (val <= this.value) {

        // only insert new tree if left branch is empty
        if (!this.left) this.left = new BinaryTree(val);
        else this.left.insert(val);     // recursively call insert() on left branch
    } else if (val > this.value) {      // move down and right
        if (!this.right) this.right = new BinaryTree(val);
        else this.right.insert(val);    //recursively call insert on right branch
    }

}

BinaryTree.prototype.contains = function (val) {
    // check value of current Tree and return true if val === value
    if (val === this.value) return true;
    if (val < this.value) {
        // go down left branch if exists
        if (!this.left) return false;
        else return this.left.contains(val);
    } else if (val > this.value) {
        // go down right branch if exists
        if (!this.right) return false;
        else return this.right.contains(val);
    }
    return false;
}

// This version of depthFirstTraversal is also known as In Order traversal
BinaryTree.prototype.depthFirstTraversal = function (iteratorFunc, order) {
    // depth first traversal will return all values in order
    if (this.left) {
        this.left.depthFirstTraversal(iteratorFunc, order);
    }
    if (order === "in-order"); {
        iteratorFunc(this.value);
    }

    if (this.right) {
        this.right.depthFirstTraversal(iteratorFunc, order);
    }


}

BinaryTree.prototype.breadthFirstTraversal = function (iteratorFunc) {
    // breath first traversal will return all values in order of depth from head 

}


let BT = new BinaryTree(50);


BT.insert(30);
BT.insert(70);
BT.insert(60);
BT.insert(100);
BT.insert(59)
BT.insert(20)
BT.insert(45)
BT.insert(35)
BT.insert(85)
BT.insert(105)
BT.insert(10)
//console.log(BT.right.right);
//console.log(BT.contains(11));

BT.depthFirstTraversal(log, "in-order");

function log(val) {
    console.log(val);
}


// // Factorial Exmaple
// function factorial(x) {
//     if (x === 1) {  // base case
//         return x;
//     } else {  // recursive case
//         return x * factorial(x - 1);
//     }
// }

// console.log(factorial(4));