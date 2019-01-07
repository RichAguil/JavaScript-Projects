function binarySearch (array, minIndex, maxIndex, target) {
  var midIndex = Math.floor((minIndex + maxIndex)/2);  //0+10 = [5] which is equal to 11
  if (target === array[midIndex]) { //false
    console.log("The number of bisections required were: " + count)
    return true;
  } else if (minIndex > maxIndex) {
    console.log("The number does not exist in the array!")
    return false;
  } else if (target > array[midIndex]) { //true
    count++;
    minIndex = midIndex + 1; //minIndex = [6] which is equal to 19
    return binarySearch(array, minIndex, maxIndex, target) //array, 6, 10, 42
  } else if (target < array[midIndex]) {
    count++;
    maxIndex = midIndex - 1;
    return binarySearch(array, minIndex, maxIndex, target);
  };
};

array = [1,3,5,6,8,11,19,23,35,42,56];
var minIndex = 0;
var maxIndex = array.length - 1; //10
var target = 42;
var count = 0;

binarySearch(array, minIndex, maxIndex, target);
