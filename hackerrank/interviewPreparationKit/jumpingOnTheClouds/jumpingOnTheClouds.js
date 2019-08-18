function jumpingOnTheClouds(arr) {
  
  let arrOfPossibleSteps = [];
  let length = arr.length;

  function recursiveChecker(currentIndex, currentElement, arr, numberOfSteps) {
  
    let nextIndex = currentIndex + 1;
    let afterNextIndex = currentIndex + 2;

    if (currentIndex === (length - 1)) {
      arrOfPossibleSteps.push(numberOfSteps);
      return;
    }

    if (arr[nextIndex] === 0) {
      let newNumberOfSteps = numberOfSteps + 1;
      console.log('masuk if pertama', newNumberOfSteps, currentIndex);
      recursiveChecker(nextIndex, arr[nextIndex], arr, newNumberOfSteps);
    } 
    
    if (arr[afterNextIndex] === 0) {
      let newNumberOfSteps = numberOfSteps + 1;
      console.log('masuk if kedua', newNumberOfSteps, currentIndex);
      recursiveChecker(afterNextIndex, arr[afterNextIndex], arr, newNumberOfSteps);
    }

    if (arr[nextIndex] === undefined || arr[afterNextIndex] === undefined) {
      return;
    }
  }
  
  recursiveChecker(0, arr[0], arr, 0);
  return arrOfPossibleSteps.sort()[0];
}


let testArr = [0, 0, 0, 1, 0, 0]; 
let testArr = [0, 0, 0, 0, 1, 0];

console.log(jumpingOnTheClouds(testArr));
