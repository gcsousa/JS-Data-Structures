function HashTable(size) {
    this.buckets = Array(size);
    this.numBuckets = this.buckets.length;
}

function HashNode(key, value, next) {
    this.key = key;
    this.value = value;
    this.next = next || null;
}

HashTable.prototype.hash = function (key) {
    let total = 0;
    for (let i = 0; i < key.length; i++) {
        total += key.charCodeAt(i);
    }
    let hashVal = total % this.numBuckets;
    return hashVal;
}

HashTable.prototype.insert = function (key, value) {
    let bucket = this.hash(key);
    if (!this.buckets[bucket]) {    // bucket at hashed key is empty, put node there
        this.buckets[bucket] = new HashNode(key, value);
    } else if (this.buckets[bucket].key === key) {
        this.buckets[bucket].value = value;
    } else {  // if the bucket already holds a node, traverse linked list until the end, place node there
        let curNode = this.buckets[bucket];
        while (curNode.next) {
            if (curNode.next.key === key) {
                curNode.next.value = value;
                return;
            }
            curNode = curNode.next;
        }
        curNode.next = new HashNode(key, value);
    }

}

HashTable.prototype.get = function (key) {
    let bucket = this.hash(key);
    if (!this.buckets[bucket]) return null;
    else {
        let curNode = this.buckets[bucket];
        while (curNode) {
            if (curNode.key === key) return curNode.value;
            curNode = curNode.next;
        }
        return null;
    }
}

HashTable.prototype.getAll = function () {
    var tableArr = [];

    for (var i = 0; i < this.numBuckets; i++) {
        var curNode = this.buckets[i];

        while (curNode) {
            tableArr.push(curNode);
            curNode = curNode.next;
        }
    }
    return tableArr;
}

let myHT = new HashTable(20);
//console.log(myHT);
myHT.insert("a", 'jed@gmail.com');
myHT.insert("b", '2@yahoo.com');
myHT.insert("c", '3@yahoo.com');
myHT.insert('Joe', 'joe@mymail.com');
myHT.insert('jeo', 'jeo@news.com');

console.log(myHT);

console.log(myHT.getAll());//