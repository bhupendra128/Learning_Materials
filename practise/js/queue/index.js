class Queue {
    constructor(){
      this.data = [];
    }
    enqueue(ele){
     this.data.push(ele);
    }
    dequeue(){
      return this.data.shift();
    }
  }
  
  const queue1 = new Queue();
  queue1.enqueue(10);
  queue1.enqueue(20);
  console.log(queue1.dequeue())
  console.log(queue1.data,'data')