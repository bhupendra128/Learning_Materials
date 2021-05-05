// stack

class Stack{
    constructor(){
      this.data = [];
    }
    push(ele){
      this.data.push(ele);
    }
    pop(){
       return this.data.pop();
    }
    peek(){
      if(this.data.length){
      return this.data[this.data.length - 1];
      }
      return -1;
    }
  }
  
  const stack1 = new Stack();
  console.log(stack1.peek());
  stack1.push(2)
  console.log(stack1.pop());
  