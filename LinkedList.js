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

  if (currentNode === null) {
    this.head = node;
    this.length++;
  } else {
    while (currentNode.next) {
      currentNode = currentNode.next;
      this.length++;
    };
    currentNode.next = node;
    this.length++;
  };

};

LinkedList.prototype.remove = function(removePosition) {
  previousNode = null;
  currentNode = this.head
  nodePosition = 1;
  if (removePosition > s.length) {
    console.log("The node you wish to delete does not exist!");
  } else {
    while (nodePosition != removePosition) {
      nodePosition++;
      previousNode = currentNode;
      currentNode = currentNode.next;
    };
    previousNode.next = currentNode.next;
  };
};
