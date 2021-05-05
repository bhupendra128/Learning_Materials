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
    addElements(ele) {
      const node = new Node(ele);
      if (!this.head) {
        this.head = node;
      } else {
        let curr = this.head;
        while (curr.next) {
          curr = curr.next;
        }
        curr.next = node;
      }
    }
    printElements() {
      if (!this.head) {
        console.log("List is Empty");
      } else {
        let curr = this.head;
        while (curr.next) {
          console.log(curr.data, "data");
          curr = curr.next;
        }
        console.log(curr.data, "data");
      }
    }
    printMidElement(){
      if (!this.head) {
          console.log("List is Empty");
        } else {
            let curr1 = this.head;
            let curr2 = this.head;
            while(curr2 && curr2.next){
              curr1 = curr1.next;
              curr2 = curr2.next.next;
            }
            console.log(curr1.data,'MidValue');
        }
    }
  }
  
  const linkedList = new LinkedList();
  linkedList.addElements(10);
  linkedList.addElements(20);
  linkedList.addElements(30);
  linkedList.addElements(40);
  linkedList.addElements(50);
  linkedList.addElements(60);
  
  
  
  linkedList.printElements();
  linkedList.printMidElement();




// l1 = 3->6->15->30 --


class Node {
  constructor(data,next){
   this.data = data;
   this.next = next;
  }
}

// class LinkedList {
//   constructor(){
//       this.head = null;
//   }
//   addElements(ele) {
//    const node =  new Node(ele);
//    if(!this.head){
//        this.head = node;
//        return;
//    }
//    let curr = this.head;
//    while(curr.next){
//        curr = curr.next;
//    }
//    this.head = node;
//   }
//   reverseLinkedList() {
//       let counter = 0;
//       if(!this.head){
//           console.log('it is empty');
//       } else if(!this.head.next) {
//           console.log(this.head.data);
//       } else {
//           let curr = this.head;
//           while(curr.next){
//            counter++;
//            curr = curr.next;
//            //last node
//           }
//           while(counter < 0){
//               curr.next = curr;

//               counter--;
//           }
//       }
//   }
// }

// // linked node ==lastnode cuu

// const link1 = new LinkedList();
// const link2 = new LinkedList();

// getIntersectionPoint(link1,link2)
  