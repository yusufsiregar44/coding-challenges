function countingValleys(n, arr) {
  let numberOfValleys = 0;
  let currentLevel = 0;
  let previousLevel = 0

  for (let i = 0; i < arr.length; i++) {
    let previousLevel = currentLevel;
    if (arr[i] === 'U') {
      currentLevel += 1;
    } else if (arr[i] === 'D') {
      currentLevel -= 1;
    }
    if (currentLevel === 0 && (previousLevel / -1 > 0)) {
      numberOfValleys += 1;
    }
  };

  return numberOfValleys;
}

console.log(countingValleys(8, ['U', 'D', 'D', 'D', 'U', 'D', 'U', 'U']));