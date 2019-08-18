function repeatedString(s, n) {

  let modulus = n % s.length;
  let multiplier = (Math.floor(n / s.length));
  let totalNumOfA = 0;
  let curVal;

  for (let i = 0; i < s.length; i++) {
    if (s[i] === 'a') {
      totalNumOfA += 1
    };
  }

  curVal = Math.floor(multiplier * totalNumOfA)
  
  if (modulus !== 0) {
    let leftover = s.slice(0, modulus);
    for (let j = 0; j < leftover.length; j++) {
      if (leftover[j] === 'a') {
        curVal += 1
      };
    }
  }

  return curVal;
}

console.log(repeatedString('aba', 10));