// trees

class Node {
    constructor(data,left, right){
     this.data = data;
     this.left = left;
     this.right = right;
    }
  }
  
  class Trees {
    constructor(){
      this.root = null;
      this.size = 0;
    }
    addElements(ele){
     const node = new Node(ele);
     if(!this.root){
       this.root = node;
       return;
     }
     const insertNode = (node, newNode) => {
       if(newNode.data < node.data){
         if(!node.left){
           node.left = newNode;
         } else {
          insertNode(node.left, newNode);
         }
       } else {
         if(!node.right){
           node.right = newNode;
         } else {
          insertNode(node.right, newNode);
         }
       }
     }
     insertNode(this.root, node);
    }
    printElements(){
      if(!this.root){
        console.log('tress is empty');
        return;
      }
      const preOrder =(node) => {
       if(node) {
         console.log(node);
        preOrder(node.left);
        preOrder(node.right);
       }
      }
      console.log('PreOrder...');
      preOrder(this.root);
  
      const inOrder = (node) => {
        if(node){
          inOrder(node.left);
          console.log(node);
          inOrder(node.right);
        }
      }
      console.log('InOrder...');
      inOrder(this.root);
  
      const postOrder = (node) => {
        if(node){
          postOrder(node.left);
          postOrder(node.right);
          console.log(node);
        }
      }
      console.log('PostOrder...');
      postOrder(this.root);
    }
  }
  
  const trees1 = new Trees();
  trees1.addElements(20);
  trees1.addElements(8);
  trees1.addElements(30);
  
  trees1.printElements();
  