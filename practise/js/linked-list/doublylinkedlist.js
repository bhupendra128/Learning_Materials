class Node {
    constructor(data, next = null, prev) {
      this.data = data;
      this.next = next;
      this.prev = prev;
    }
  }
  
  class DoublyLinkedList {
    constructor() {
      this.head = null;
      this.size = 0;
    }
    insertAtHeads(ele) {
      const node = new Node(ele);
      if (!this.head) {
        this.head = node;
        return;
      } 
      let curr = this.head;
      curr.prev = node;
      node.next = curr;
      this.head = node;
      console.log(this.head,'curr')
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
    deleteMidElement() {
     if(!this.head){
      console.log("List is Empty");
      return;
     }
     let curr1 = this.head;
     let curr2 = this.head;
     while(curr2 && curr2.next){
      curr1 = curr1.next;
      curr2 = curr2.next.next;
     }
     let prevNode = curr1.prev;
     prevNode.next = curr1.next;
    }
  }
  
  const linkedList = new DoublyLinkedList();
  linkedList.insertAtHeads(10);
  linkedList.insertAtHeads(20);
  linkedList.insertAtHeads(30);
  linkedList.insertAtHeads(40);
  linkedList.insertAtHeads(50);
  linkedList.insertAtHeads(60);
  
  
  // linkedList.deleteMidElement();
  linkedList.printElements();
  linkedList.printMidElement();
  