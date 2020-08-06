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
        let curNode = this.buckets;
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


let myHT = new HashTable(30);
//console.log(myHT);
myHT.insert('Jed', 'jed@gmail.com');
myHT.insert('Andrea', 'andrea@yahoo.com');
myHT.insert('Emily', 'emilyscott@gmail.com');
myHT.insert('Daniel', 'dantheman@itunes.com');
myHT.insert('NuNu', 'nunu@mymail.com');
myHT.insert('Maggie', 'maggie@gmail.com');
myHT.insert('Martha', 'martha@warren.com');
myHT.insert('Amos', 'amosscott@pgfd.gov');
myHT.insert('Matt', 'matt@hilti.com');
console.log(myHT.buckets);
