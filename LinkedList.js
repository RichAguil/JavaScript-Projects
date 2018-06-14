function Node(value) { //This constructor creates the node object with two properties, a data property, and a pointer to the next node

  this.data = value;
  this.next = null;
};

function LinkedList() { //This constructor initializes the Linked List, and it has two properties, a length, and head
  this.length = 0;
  this.head = null; //When you create a Linkedlist, it will be empty, thus why the head is equal to null
};

LinkedList.prototype.attach = function(value) { //This creates a new method called add that will be added to the LinkedList prototype. All subsequenct Linked Lists will inherit the add method
  var node = new Node(value); // A new node object is created
  currentNode = this.head; //This initialize the count (we start at the head of the list)

  if (currentNode === null) { //This checks to see if a node already exists. If it doesn't, it means the linkedlist is empty
    this.head = node;
    this.length++;
  } else {
    while (currentNode.next) { //This checks to see if the linked list has more than one node. If it does, it will keep iterating until it reaches the end of the list 
      currentNode = currentNode.next;
      this.length++;
    };
    currentNode.next = node; //Once the end of the list is reached, a new link in the chain is created, and a node is attached.
    this.length++;
  };

};

//The code below creates a remove method that all linkedlists will inherit. It will keep track of the two positions in the node.
//It will iterate through the linked list until it finds the node the user wants to remove. Once it does, it will set the node before
//the targeted one equal to the node AFTER the targeted one. This will unlink the targeted node, effectively removing it.
LinkedList.prototype.remove = function(removePosition) {
  previousNode = null; 
  currentNode = this.head
  nodePosition = 1;
  if (removePosition > this.length) {
    console.log("The node you wish to delete does not exist!");
  } else {
    while (nodePosition != removePosition) { //This condition will be true until the targeted node is reached
      nodePosition++;
      previousNode = currentNode;
      currentNode = currentNode.next; 
    };
    previousNode.next = currentNode.next; //The node before the target will be linked to the node after the target, unlinking the targeted node
  };
};
