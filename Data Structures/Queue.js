function Queue (value) {
  this.count = 0;
  this.array = [];
};

Queue.prototype.enqueue = function (value) {
  this.count++;
  if (this.count === 0) {
    this.array.push(value);
  }
   else {
     this.array.unshift(value);
   }
};

Queue.prototype.dequeue = function () {
  if (this.count === 0){
    var message = "This Queue is empty!";
    return message;
  }
  this.count--;
  return this.array.shift();
};

Queue.prototype.peek = function () {
  if (this.count === 0) {
    var message = "This Queue is empty!";
    return message;
  };

  return this.array[0];
};


Queue.prototype.size = function () {
  return this.count;
};
