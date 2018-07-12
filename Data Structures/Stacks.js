function Stack(value) {
  this.array = [];
  this.count = 0;
};

Stack.prototype.push = function (value) {
  this.array.push(value);
  this.count++;
};

Stack.prototype.peek = function () {
  if (this.count === 0) {
    var message = "This Stack is empty!";
    return message;
  };

  var last = this.array.length;
  console.log(this.array[last-1]);
};

Stack.prototype.pop = function () {
  this.count--;
  return this.array.pop();
};

Stack.prototype.size = function () {
  return this.count;
};
