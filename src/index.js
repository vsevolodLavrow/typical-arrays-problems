exports.min = function min (array) {  
  if ( array && array.length ) {
  var len = array.length;
  var min = Infinity;
    while(len--) {
      if (array[len] < min) {
        min = array[len];
      }
    }
    return min;
  }
    else return 0;
} 

exports.max = function max (array) {
  if ( array && array.length ){
  var len = array.length;
  var max = -Infinity;
    while(len--) {
      if (array[len] > max) {
        max = array[len];
      }
    }
    return max;
  }
    else return 0;
}

exports.avg = function avg (array) {
  if ( array && array.length ) {
    var len = array.length;
    var avg = 0;
      while (len--) {
        avg += array[len];
      }
      return avg / array.length;
  } else return 0;
}
