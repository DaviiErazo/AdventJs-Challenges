function getMinJump(obstacles) {
  let candidate = 0;
  let max = Math.max(...obstacles);
  
  const obstaclesMap = obstacles.reduce((acc, value) => {
    acc[value] = value;
    return acc;
  }, {});  

  for (let i = 1; i<=max; i++) {
    let parcialCandidate = 0;
    
    for (let j=i; j<=max; j = j + i) {
      if(!obstaclesMap[j]) {
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
//.     x. x.       x     x      x.              x  
//0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14
