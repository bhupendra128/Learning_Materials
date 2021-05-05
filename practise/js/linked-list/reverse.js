
const LL = require('./index');
const LinkedList = LL.LinkedList;
const Node = LL.Node;

class ReverseLinkedList extends LinkedList {
 constructor(){
     super();
 }
  reverse(){
    let reversed = null;
    while(this.head){
        const tmp = this.head; 
        this.head = this.head.next; 
        tmp.next = reversed;
        reversed = tmp;
    }
    console.log(reversed,'reversed')
    //
    this.head = reversed;
    return reversed;
 }
}

const r1 = new ReverseLinkedList();
console.log(r1,'r1')

r1.addElement(20);
r1.addElement(30);
r1.addElement(40);

r1.showElement();
r1.reverse();
