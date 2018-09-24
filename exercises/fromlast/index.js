// --- Directions
// Given a linked list, return the element n spaces
// from the last node in the list.  Do not call the 'size'
// method of the linked list.  Assume that n will always
// be less than the length of the list.
// --- Examples
//    const list = new List();
//    list.insertLast('a');
//    list.insertLast('b');
//    list.insertLast('c');
//    list.insertLast('d');
//    fromLast(list, 2).data // 'b'

function fromLast(list, n) {
  // 1 - Possible fewer iterations but has an added variable that keeps counting
  // let nBehind = list.getFirst();
  // let lookAhead = list.getFirst();
  // let lookAheadIndex = 0;
  // while (lookAhead && lookAhead.next) {
  //   if (n >= n) {
  //     // If lookAheadIndex has reached or gone above n
  //     // then have nBehind start forwarding.
  //     nBehind = nBehind.next;
  //   }
  //   lookAheadIndex++;
  //   lookAhead = lookAhead.next;
  // }
  // return nBehind;

  // 2 - Possible more iterations, but no extra variable - 1 "feels" better
  let nBehind = list.getFirst();
  let lookAhead = list.getFirst();
  // Move look ahead n forward
  while (n > 0) {
    lookAhead = lookAhead.next;
    n--;
  }
  // And then move both forward at same pace
  while (lookAhead.next) {
    lookAhead = lookAhead.next;
    nBehind = nBehind.next;
  }
  return nBehind;
}

module.exports = fromLast;
