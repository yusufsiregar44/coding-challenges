
// function consoleLogHelper(str, pivotEl, arrResult) {
//   console.log(str, `\n${pivotEl}`, `\n${arrResult}`, '\n--------<>--------\n');
// }


// function sockMerchantTrialOne(n, arr) {
//   /*
//     Documentation
//   */


//   let pivotIndex = Math.floor(n/2);
//   let pivotEl = arr[pivotIndex];
//   let leftIndex = 0
//   let rightIndex = arr.length - 1

//   let cancelled = false;

//   while (cancelled !== true) {
//     let leftOperationExecuted = false;
//     let leftEl= arr[leftIndex];
//     console.log('left --> ', leftEl);

//     if (leftEl > pivotEl) {
//       let toBeRemoved = leftEl;
//       arr.splice(leftIndex, 1);
//       arr.push(toBeRemoved)
//       leftOperationExecuted = true;
//       consoleLogHelper('left', pivotEl, arr)
//     }

//     if (leftOperationExecuted === true) {
//       rightIndex--
//       pivotIndex--
//     }

//     let rightEl = arr[rightIndex];
//     let rightOperationExecuted = false;
//     if (rightEl < pivotEl) {
//       let toBeRemoved = rightEl;
//       arr.splice(rightIndex, 1)
//       arr.unshift(toBeRemoved)
//       consoleLogHelper('right', pivotEl, arr)
//     }

//     if (rightOperationExecuted === true) {
//       pivotIndex++
//     }

//     rightIndex--;
//     leftIndex++;
//     console.log(leftIndex, rightIndex);
//     if (rightIndex < pivotIndex) {
//       cancelled = true;
//     }
//   }
//   return [pivotEl, arr];
// };

// function quickSort(arr) {
//   if (arr.length <= 1) {
//     console.log('--> ', arr)
//     return arr;
//   }

//   let rightArr = [];
//   let leftArr = [];
//   let pivotValue = arr.pop();
  
//   for (let i = 0; i < arr.length; i++) {
//     if (arr[i] < pivotValue) {
//       leftArr.push(arr[i])
//     } else if (arr[i] >= pivotValue) {
//       rightArr.push(arr[i]);
//     }
//   }

//   console.log(leftArr.concat(pivotValue, rightArr));
//   return quickSort(leftArr).concat(pivotValue, quickSort(rightArr));
// }

function sockMerchant(n, arr) {
  function quickSort(arr) {
    if (arr.length <= 1) {
      return arr;
    }
  
    let rightArr = [];
    let leftArr = [];
    let pivotValue = arr.pop();
    
    for (let i = 0; i < arr.length; i++) {
      if (arr[i] < pivotValue) {
        leftArr.push(arr[i])
      } else if (arr[i] >= pivotValue) {
        rightArr.push(arr[i]);
      }
    }
    return quickSort(leftArr).concat(pivotValue, quickSort(rightArr));
  }

  let sortedArr = quickSort(arr);

  let noPairsValue = [];
  let pairedValue = [];

  for (let i = 0; i < sortedArr.length; i++) {
    let currentIndex = i;
    let nextIndex = currentIndex + 1;
    if (sortedArr[currentIndex] === sortedArr[nextIndex]) {
      let arrPair = [sortedArr[currentIndex], sortedArr[nextIndex]];
      pairedValue.push(arrPair);
      i = i + 1;
    } else {
      noPairsValue.push(sortedArr[currentIndex]);
    }
  }
  return pairedValue.length;
}

const testArr = [10, 20, 20, 10, 10, 30, 50, 10, 20];
const testNum = 9;

console.log(sockMerchant(testNum, testArr));