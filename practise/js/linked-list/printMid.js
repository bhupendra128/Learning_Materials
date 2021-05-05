// Print Mid value of linked list

class Node {
    constructor(data, next = null){
    this.data = data;
    this.next = next;
    }
}

class LinkedListMid {
    constructor(){
        this.head = null;
        this.size = 1;
    }
    addElement(ele){
        let node = new Node(ele);
        if(!this.head){
            this.head = node;
        } else {
            let curr = this.head;
            while(curr.next){
                curr = curr.next;
            }
            curr.next= node;
        }
    }
    printMidValue(){
        let curr = this.head;
        if(!curr){
            console.log('Linked List is empty');
        } else if(!curr.next){
            ++this.size;
        }
        else {
            while(curr.next) {
                curr = curr.next;
              ++this.size;
            }
        }
        const midValue = Math.ceil(this.size  / 2);
        let initialValue = 1;
        let curr1 = this.head;
        while(initialValue < midValue){
            curr1 = curr1.next;
            ++initialValue;
        }
        console.log(curr1.data,'Mid Value')
    }
    printMid2Method(){
        if(!this.head){
            console.log('Linked List is empty');
        } else {
            let curr1 = this.head;
            let curr2 = this.head;
            while(curr2 && curr2.next){
                curr1 = curr1.next;
                curr2 = curr2.next.next;
            }
            console.log('the middle Value', curr1.data)
        }
    }
}

const linkedTest = new LinkedListMid();
linkedTest.addElement(30);
linkedTest.addElement(10);
linkedTest.addElement(50);
linkedTest.addElement(20);
linkedTest.addElement(200);
linkedTest.addElement(400);
linkedTest.addElement(40);
linkedTest.addElement(30);
linkedTest.addElement(30);

linkedTest.printMidValue();
linkedTest.printMid2Method();
