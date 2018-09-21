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

  let first = list.getFirst();
  let current = first;
  while (current.next) {
    // End points to first    // The next node points to the current
    if (current.next === first || current.next.next === current) {
      return true;
    }
    current = current.next;
  }
  return false;
}

module.exports = circular;
