function getMinJump(obstacles) {
  let candidate = 0;
  let max = 0;
  
  for (let i = 0; i<obstacles.length; i++) {
    console.log(i);
    if (obstacles[i] > max) {
      max = obstacles[i];
    }
  }

  for (let i = 1; i<=max; i++) {
    let parcialCandidate = 0;
    
    for (let j=i; j<=max; j = j + i) {
      if(!obstacles.includes(j)) {
        parcialCandidate = i;
      } else {
        parcialCandidate = 0;
        break;
      }
    }    
    
    if (parcialCandidate > 0)
      if (candidate == 0) {
        candidate = parcialCandidate
      }else if (parcialCandidate < candidate) {
        candidate = parcialCandidate
      }    
  	}
  
  return candidate;

}

const obstacles = [2, 4, 6, 8, 10]
getMinJump(obstacles) // -> 7


getMinJump([1, 2, 3, 5]) // -> 4
getMinJump([3, 7, 5]) // -> 2
getMinJump([9, 5, 1]) // -> 2

getMinJump([14, 10, 8, 2, 3, 6])