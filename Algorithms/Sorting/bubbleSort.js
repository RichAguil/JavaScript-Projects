function bubbleSort(array) {
  var holdingVar = 0;
  for (var i = array.length - 1; i >=0 ; i--) {
      for (var j = 0; j <= array.length - 1; j++) {
          if (array[j] > array[j+1]) {
            holdingVar = array[j+1];
            array[j+1] = array[j];
            array[j] = holdingVar;
          };
      };
  };
};
