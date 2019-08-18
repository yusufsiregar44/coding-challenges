function compareTriplets(a, b) {
  let alicePoints = 0;
  let bobPoints = 0;
  for (let i = 0; i < a.length; i++) {
    let currentElOfA = a[i];
    let currentElOfB = b[i];

    if (currentElOfA > currentElOfB) {
      alicePoints ++;
    }

    if (currentElOfB > currentElOfA) {
      bobPoints ++;
    }
  }

  return [alicePoints, bobPoints];
}

console.log(compareTriplets([5, 6, 7], [3, 6, 10]));