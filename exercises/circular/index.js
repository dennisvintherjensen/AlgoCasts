// --- Directions
// Given a linked list, return true if the list
// is circular, false if it is not.
// --- Examples
//   const l = new List();
//   const a = new Node('a');
//   const b = new Node('b');
//   const c = new Node('c');
//   l.head = a;
//   a.next = b;
//   b.next = c;
//   c.next = b;
//   circular(l) // true

function circular(list) {

  let slow = list.getFirst();
  let fast = list.getFirst();
  while (fast && fast.next && fast.next.next) {
    // By moving slow forward 1 at a time and fast 2 at a time
    // the two will at some stage reference the same node if
    // the list is circular.
    slow = slow.next;
    fast = fast.next.next;
    if (fast === slow) {
      return true;
    }
  }
  // the list has an end and thereby can not be circular
  return false;
}

module.exports = circular;
