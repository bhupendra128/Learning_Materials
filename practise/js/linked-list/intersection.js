class Node {
  constructor(data, next = null) {
    this.data = data;
    this.next = next;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
    this.size = 0;
  }
  addElement(list, ele) {
    const newNode = new Node(ele);
    if (!list) {
      list = newNode;
    } else {
      let currNode = list;
      while (currNode.next) {
        currNode = currNode.next;
      }
      currNode.next = newNode;
    }
    return list;
  }
  displayElement(list) {
    if (!list) {
      console.log('List is empty');
    } else {
      let curr = list;
      while (curr.next) {
        console.log(curr.data, 'data');
        curr = curr.next;
      }
      console.log(curr.data, 'last element');
    }
  }
  intersectionLL(headA, headB) {
    if (headA === null || headB === null) {
      return null;
    }
    let pointer1 = headA;
    let pointer2 = headB;
    while (pointer1 !== pointer2) {
      pointer1 = pointer1.next;
      pointer2 = pointer2.next;

      if (pointer1 === pointer2) {
        return pointer1;
      }

      if (pointer1 === null) {
        pointer1 = headB;
      }

      if (pointer2 === null) {
        pointer2 = headA;
      }
    }
    return pointer1;
  }
}

const LL = new LinkedList();
const headA = LL.addElement(20);
const headB = LL.addElement(20);

LL.addElement(40);
LL.addElement(50);
LL.addElement(80);
LL.addElement(100);
LL.addElement(120);

LL.reverse();
LL.midElement();

class InterSectionLinkedList extends LinkedList {
  findInterSection() {}
}

function intersectionLL(headA, headB) {
  if (headA === null || headB === null) {
    return null;
  }
  let pointer1 = headA;
  let pointer2 = headB;
  while (pointer1 !== pointer2) {
    pointer1 = pointer1.next;
    pointer2 = pointer2.next;

    if (pointer1 === pointer2) {
      return pointer1;
    }

    if (pointer1 === null) {
      pointer1 = headB;
    }

    if (pointer2 === null) {
      pointer2 = headA;
    }
  }
  return pointer1;
}
