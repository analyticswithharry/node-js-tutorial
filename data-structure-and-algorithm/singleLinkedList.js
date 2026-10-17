class Node{
    constructor(data){
        this.data = data;
        this.next = null;
    }
}

class LinkedList{
    constructor(){
        this.head = null;
    }
    append(data){
        const newNode = new Node(data);
        if(this.head == null){
            this.head = newNode;
            return;
        }
        let current = this.head;
        while(current.next !== null){
            current = current.next;
        }
        current.next = newNode;
    }
    print(){
        let current = this.head;
        let values = [];
        while(current !== null){
            values.push(current.data);
            current = current.next;
        }
        console.log(values.join(" -> ") + "-> null");
    }

    search(target){
        let current = this.head;
        while(current !== null){
            if(current.data === target){
                return true;
            }
            current = current.next;
        }
        return false;
    }

    delete(target){
        if(this.head === null){
            return;
        }
        if(this.head.data === target){
            this.head == this.head.next;
            return;
        }
        let current = this.head;
        while(current.next !== null){
            if(current.next.data === target){
                current.next = current.next.next;
                return;
            }
            current = current.next;
        };
    };
};

const list = new LinkedList();
list

list.append(15);
list.append(3);
list.append(17);
list.append(90);

list.print();

console.log("Find 17:", list.search(17));
console.log("Find 50:", list.search(50));

list.delete(17);
list.print();
