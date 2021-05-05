class Node {
    constructor(data, next=null){
     this.data = data;
     this.next = next;
    }
}

class LinkedList {
    constructor(){
        this.head = null;
        this.size = 0;
    }
    addElement(ele){
     const newNode = new Node(ele);
     if(!this.head){
         this.head = newNode;
     } else {
         let currNode = this.head;
         while(currNode.next){
            currNode = currNode.next;
         }
         currNode.next = newNode;
        //  this.displayElement();
     }
     
    }
    displayElement(){
        if(!this.head){
            console.log('List is empty');
        } else {
            let curr = this.head;
            while(curr.next){
                console.log(curr.data,'data');
                curr = curr.next;
            }
            console.log(curr.data,'last element');
        }
    }
    reverse(){
        let reversed = null;
        while(this.head){
            let temp = this.head;
            this.head = this.head.next;
            temp.next = reversed;
            reversed = temp;
        }
        this.head = reversed;
        this.displayElement();
    }
    midElement(){
        let curr1 = this.head;
        let curr2 = this.head;
        while(curr2 && curr2.next){
            curr2 = curr2.next.next;
            curr1 = curr1.next;
        }
        console.log(curr1.data,'mid element')
    }
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

const LL = new LinkedList();
LL.addElement(20);
LL.addElement(40);
LL.addElement(50);
LL.addElement(80);
LL.addElement(100);
LL.addElement(120);

LL.reverse();
LL.midElement();

var obj1 = {
    a: 'a1',
    b: 'b2',
    c: {
      c1: 'c1',
      c2: 'c2',
      c3: 'c3',
      h: {
          h1:'h1',
      },
    },
    d: 'd1',
  };
  
  var obj2 = {
    a: 'a1',
    c: {
      c1: 'c1',
      c2: 'c2',
      j: {
          j1:'j1'
      }
    },
    d: 'd2',
    e: 'e1'
  };
  
  // output object
  var obj3 = {
    b: 'b2',
    c: {
      c3: 'c3',
    },
    d: 'd1',
  };
  
  function getDiffObj(objA, objB) {
    let finalDif = {};
    function recursion(obj1, obj2) {
      for (let key in obj1) {
        if (!finalDif[key]) {
          if (typeof obj1[key] === 'object') {
          finalDif[key] = getDiffObj(obj1[key], obj2[key]);
          } else if (!obj2 || !obj2[key] || obj1[key] !== obj2[key]) {
            finalDif[key] = obj1[key];
          }
        }
      }
    }
    recursion(objA, objB);
    recursion(objB, objA);
    return finalDif;
  }

  console.log(getDiffObj(obj1, obj2));



