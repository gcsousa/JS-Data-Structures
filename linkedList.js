function Node(value, next, prev) {
    this.value = value;
    this.next = next;
    this.prev = prev;
}

function LinkedList() {
    this.head = null;
    this.tail = null;
}

// let LL = new LinkedList();

// console.log(LL);
// let node1 = new Node(100, 'node2', null);
// console.log(node1);

LinkedList.prototype.addToHead = function (value) {
    let newNode = new Node(value, this.head, null);
    // nodes already exist
    if (this.head) {
        this.head.prev = newNode;
    } else {
        this.tail = newNode;
    }
    this.head = newNode;
}

LinkedList.prototype.addToTail = function (value) {
    let newNode = new Node(value, null, this.tail);
    if (this.tail) {
        this.tail.next = newNode;
    } else {
        this.head = newNode;
    }
    this.tail = newNode;
}

LinkedList.prototype.removeHead = function () {
    // removeHead returns value in current head and removes that node
    // To remove the head we need to 
    // check if list is empty
    if (!this.head) return null;
    // set head to head.next
    let val = this.head.value;  // save value of current head
    this.head = this.head.next;

    // set head.prev to null;
    if (this.head) this.head.prev = null;
    else this.tail = null;
    return val;
}

LinkedList.prototype.removeTail = function () {
    // removeTail returns the value in current tail and removes that node
    // To remove tail we need to 
    // check to see if list is empty
    if (!this.tail) return null;
    // set tail to tail.prev
    let val = this.tail.value;  // save value of current tail
    this.tail = this.tail.prev;
    // set tail.next to null;
    if (this.tail) this.tail.next = null;
    else this.head = null;
    return val;

}

LinkedList.prototype.search = function (searchVal) {
    // set curNode to head to start
    let curNode = this.head;
    // loop through list until curNode === null;
    while (curNode) {
        if (curNode.value === searchVal) return curNode.value;
        curNode = curNode.next;
    }
    return -1;
}

LinkedList.prototype.indexOf = function (searchVal) {
    // this function will return all of the index for nodes having the value 
    let myArr = [];
    let idx = 0
    // set curNode to head to start search
    let curNode = this.head;
    while (curNode) {
        if (curNode.value === searchVal) myArr.push(idx);
        idx++;
        curNode = curNode.next;
    }
    return myArr;
}

let ll = new LinkedList();
ll.addToHead(100);
//console.log(ll);
ll.addToTail(200);
//console.log(ll);
ll.addToTail(300);
ll.addToTail(100);
ll.addToTail('tail');

console.log(ll.indexOf(100));