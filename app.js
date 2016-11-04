var arr = [1,3,2];

function insertionSort(arr) {
  var i, j, k, val, lim;
  lim = arr.length;

  for(i = 1; i < lim; i++) {
    val = arr[j = i];
    k = j - 1;

    while(j && arr[k] > val) {
      arr[j--] = arr[k--];
      arr[j] = val;
    }
  }
  return arr;
};

console.log(insertionSort(arr));


// VARIABLE LOOP VALUE
// (lim)   3 | 3
// (i)     1 | 2
// (j)     1 | 2
// (k)     0 | 1
// (val)   3 | 2


(for, while, swamp)
