function sumPairs(numbers, result) {
  let numbersMap = {};
  let winner = {};
  
  for (let i=0; i<numbers.length; i++) {
    const expectedValue = result - numbers[i];
    
    if (numbersMap[expectedValue] >= 0) {
      if (Object.keys(winner).length === 0 || (winner.x > numbersMap[expectedValue])) {
          winner = { x: numbersMap[expectedValue], y: i } ;
      }
    } else {
      numbersMap[numbers[i]] = i;
    }
  }
  
  return Object.keys(winner).length > 0 ? 
    [numbers[winner.x], numbers[winner.y]] : null;
}


console.log(sumPairs([6, 7, 1, 2], 8)); // [6, 2]
console.log(sumPairs([3, 5, 7, 2], 10)); // [3, 7]
console.log(sumPairs([2, 2, 3, 1], 4)); // [2, 2]