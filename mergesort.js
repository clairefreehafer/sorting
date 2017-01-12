function split(wholeArray) {

  var middleNum = Math.floor( (wholeArray.length) / 2)
  var firstHalf = wholeArray.splice(0, middleNum)
  var secondHalf = wholeArray


  return [firstHalf, secondHalf];
}


function merge(arr1, arr2){

  var newArray = [];

  while (arr1.length || arr2.length) {

    if (!arr1.length) {return newArray.concat(arr2)}
    else if (!arr2.length) {return newArray.concat(arr1)}

    var pointer1 = arr1[0];
    var pointer2 = arr2[0];

    if (pointer1 > pointer2) {
      newArray.push(pointer2);
      arr2.shift();
    } else {
      newArray.push(pointer1);
      arr1.shift();

    }
  }
  return newArray
}


function mergeSort(array) {

  if (array.length===1) {
    return array
  }
  else {
      var splittedArray = split(array)

      var firstHalf = splittedArray[0];
      var secondHalf = splittedArray[1];

      return merge(mergeSort(firstHalf), mergeSort(secondHalf))





  }



}
