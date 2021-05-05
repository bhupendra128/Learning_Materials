// Linked list implementation

class Node {
    constructor(data, next = null) {
      this.data = data;
      this.next = next;
    }
  }

class LinkedList {
    constructor(){
        this.head = null;
        this.size = 0;
    }
    addElement(ele) {
        const node =  new Node(ele);
        if(!this.head){
            this.head = node;
            ++this.size;
        } else {
            let curr = this.head;
            while(curr.next){
                curr = curr.next;
            }
            curr.next = node;
            ++this.size;
        }
    }
    removeElement(ele) {
        let prevNode = this.head;
        let currNode = this.head.next;
        if(this.head && this.head.data === ele){
            this.head = currNode;
            --this.size;
        } else {
        while(currNode && currNode.next){
          if(ele === currNode.data){
            prevNode.next = currNode.next;
            --this.size;
          }
          prevNode = currNode;
          currNode = currNode.next;
        }
        if(!currNode.next && ele === currNode.data){
            prevNode.next = null;
        }
    }
    }

    showElement() {
        if(!this.head){
            console.log('Linked List is empty')
        } else if(!this.head.next){
            console.log(this.head.data,'data')
        }
        else {
        let curr = this.head;
            while(curr.next){
                console.log(curr.data,'data');
                curr = curr.next;
            }
            if(!curr.next){
                console.log(curr.data,'data');
            }
        }
    }
}

// const ll = new LinkedList();
// ll.addElement(24);
// ll.addElement(23);
// ll.addElement(30);
// ll.addElement(25);
// ll.addElement(45);

// ll.removeElement(30);
// ll.removeElement(24);
// ll.removeElement(45);

// ll.showElement();


module.exports = {
    Node,
    LinkedList
}





