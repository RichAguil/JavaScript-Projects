//this unique value counting algorithm only works for sorted arrays

function countUniqueValues(array){
    if (array.length === 0) {
        return 0;
    };
    var pointerA; //first pointer
    var pointerB; //second pointer
    var index1 = 0;
    var index2 = 1;
    for (var i = 0; i <= array.length; i++) {
      pointerA = array[index1]; //0
      pointerB = array[index2]; //1
      if (pointerA === pointerB) { //if tthe first and second pointers are the same, then that means duplictate values
          array.splice(index2,1); //thus, the second value is deleted from the array
      } else if (pointerA != pointerB) { //if the values of the pointers are different, this signifies unique values
          index1++;
          index2++;
      };
    };
    return array.length;
};
