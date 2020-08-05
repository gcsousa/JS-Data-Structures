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

let ll = new LinkedList();
ll.addToHead(100);
//console.log(ll);
ll.addToHead(200);
//console.log(ll);
ll.addToTail(300);
console.log(ll.tail.prev.prev);
