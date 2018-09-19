// --- Directions
// Implement classes Node and Linked Lists
// See 'directions' document

class Node {
  constructor(data, next = null) {
    this.data = data;
    this.next = next;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
  }

  /**
   * Creates a new Node from argument 'data' and assigns the resulting node to the 'head' property.
   * @param {*} data 
   */
  insertFirst(data) {
    this.head = new Node(data, this.head);
  }

  /**
   * Returns the number of nodes in the linked list.
   */
  size() {
    let listSize = 0;
    let node = this.head;
    while (node) {
      listSize++;
      node = node.next;
    }
    return listSize;
  }

  /**
   * Returns the first node of the linked list.
   */
  getFirst() {
    return this.head;
  }

  /**
   * Returns the last node of the linked list
   */
  getLast() {
    if (!this.head) {
      return null;
    }
    let node = this.head;
    while (node) {
      // If next is null, then we are at the last node
      if (!node.next) {
        return node;
      }
      node = node.next;
    }
  }

  /**
   * Empties the linked list of any nodes.
   */
  clear() {
    this.head = null;
  }

  /**
   * Removes only the first node of the linked list. The list's head should now be the second element.
   */
  removeFirst() {
    if (!this.head) {
      return;
    }
    this.head = this.head.next;
  }

  /**
   * Removes the last node of the chain
   */
  removeLast() {
    if (!this.head) {
      return;
    }
    if (!this.head.next) {
      this.head = null;
      return;
    }
    // Keep a ref to previous node so that when we reach the
    // last node, we may null the ref to it by setting the 
    // next property to null on the previous node.
    let prevNode = this.head;
    let node = this.head.next;
    while (node.next) {
      prevNode = node;
      node = node.next;
    }
    prevNode.next = null;
  }

  /**
   * Inserts a new node with provided data at the end of the chain
   * @param {*} data 
   */
  insertLast(data) {
    let lastNode = this.getLast();
    if (lastNode) {
      lastNode.next = new Node(data);
    } else {
      // List is empty, insert at head
      this.head = new Node(data);
    }
  }

  /**
   * Returns the node at the provided index
   * @param {*} index 
   */
  getAt(index) {
    if (!this.head) {
      // list is empty
      return null;
    }
    let node = this.head;
    let counter = 0;
    while (node) {
      if (counter === index) {
        return node;
      }
      counter++;
      node = node.next;
    }
    // index is higher than list length
    return null;
  }

  /**
   * Removes node at the provided index
   * @param {*} index 
   */
  removeAt(index) {
    if (!this.head) {
      // list is empty
      return;
    }
    if (index === 0) {
      // if index is 0 we do not need to get the previous node
      this.removeFirst();
      return;
    }
    // get node previous to the one to remove
    const previousNode = this.getAt(index - 1);
    if (!previousNode || !previousNode.next) {
      return;
    } else {
      // the node which should be removed exists
      // set the prevoius node to point to the node after the one to be removed
      previousNode.next = previousNode.next.next
    }
  }

  /**
   * Create and insert a new node at provided index.
   * If index is out of bounds, add the node to the end of the list.
   * @param {*} data 
   * @param {*} index 
   */
  insertAt(data, index) {
    // list is empty or inserting at index 0 - same case
    if (!this.head || index === 0) {
      this.insertFirst(data);
      return;
    }
    // Implementation in course uses getAt and getLast to 
    // either insert at index or as the last - but this will cause
    // 2 iterations of the list if index if higher than list length.
    // 1 for getAt and if this returns null, 1 for getLast. So I'm sticking
    // with iteration here instead.
    let node = this.head;
    let counter = 1;
    while (node) {
      if (counter === index || !node.next) {
        // index has been reached or we have reached the end of list
        node.next = new Node(data, node.next);
        return;
      }
      node = node.next;
      counter++;
    }
  }

  /**
   * Calls the provided function with every node of the chain
   * @param {*} fn 
   */
  forEach(fn) {
    let node = this.head;
    let index = 0;
    while (node) {
      fn(node, index);
      node = node.next;
      index++;
    }
  }

  /**
   * Iterator
   */
  *[Symbol.iterator]() {
    let node = this.head;
    while (node) {
      yield node;
      node = node.next;
    }
  }

}

module.exports = { Node, LinkedList };
