function bubbleSort(array) {
  if (array.length === 0 || array.length === 1) {
    return array;
  }
  var newArr = [];
  var largest = 0;

  for (var i = 0; i < array.length; i++) {
    largest = array[i];
    for (var j = i + 1; j < array.length; j++) {
      if (swap(array[j], largest)) {
        largest = array[j];
      }
    }
    array = newArr;
    newArr = [];
  }



    // var val1 = array[i];
    // var val2 = array[i + 1];
    // if (swap(val1, val2)) {
    //   array[i] = val2; // move smaller up in array
    //   val2 = array[i];
    // } else {
    //   array
    // }
  }
}
// hold onto bigger value
function swap(val1, val2) {
  return val1 > val2;
}
