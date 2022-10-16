const { NotImplementedError } = require('../extensions/index.js');

const { ListNode } = require('../extensions/list-node.js');

/**
 * Implement the Queue with a given interface via linked list (use ListNode extension above).
 *
 * @example
 * const queue = new Queue();
 *
 * queue.enqueue(1); // adds the element to the queue
 * queue.enqueue(3); // adds the element to the queue
 * queue.dequeue(); // returns the top element from queue and deletes it, returns 1
 * queue.getUnderlyingList() // returns { value: 3, next: null }
 */
class Queue {
  constructor() {
    this._head = null;
    this._last = null;
    this.arr = [];
    this.length = 0;
  }

  getUnderlyingList() {
    if(!this._head) return undefined;
    else return this._head;
  }

  enqueue(value) {
    const node = new ListNode(value);
    
    if(this._head) {
      this._last.next = node;
      this._last = node;      
    } else {
      this._head = node;
      this._last = node;
    }

    this.length++;
    return this.arr.push(value);
  }

  dequeue() {
    if(!this._head) return undefined;
    
    this._head = this._head.next;
    return this.arr.shift();
  }
}

module.exports = {
  Queue
};
