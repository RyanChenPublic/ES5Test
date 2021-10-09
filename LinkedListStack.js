class Node{
    constructor(val){
        this.val = val;
        this.next = null
    }
}

class Stack{
    constructor(){
        this.head = null;
        this.end = null;
        this.len = 0;
    }
    
    push(val){
        var node = new Node(val);

        if(!this.head)
        {
            this.head = node;
            this.end = node;
        }
        else{
            let temp = this.head;
            this.head = node;
            this.head.next = temp;
        }
       
        this.len++;
    }
    size(){
        return this.len;
    }
    pop(){
        if(!this.head)
        return null;
        let temp = this.head;
        if(this.head === this.end){
            this.end=null;
        }
        this.head = this.head.next;
        this.len --;
        return temp.val;
    }
}

const myStack = new Stack();
myStack.push(1);
myStack.push(2);
myStack.push(2);
myStack.push(3);
console.log(myStack.size());
console.log(myStack.pop());