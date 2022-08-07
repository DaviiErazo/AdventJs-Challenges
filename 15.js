const hasNotUps = (position, maxPositions) => position != 0 && maxPositions.position == 0;
const nextValuesIsEqual = (nextHeight, height) => nextHeight == height;
const hasDowns = (nextHeight, height) => nextHeight < height;

function checkSledJump(heights) {
  const max = { position: 0, value: 0 };
  let downs = false;
  
  for (let i=0; i<heights.length; i++) {
    const height = heights[i];
    const nextHeight = heights[i + 1];
    
		if (hasNotUps(i, max)) return false;
    if (nextValuesIsEqual(nextHeight, height)) return false;
    if (hasDowns(nextHeight, height)) downs = true;
    
    if (nextHeight > height) {
			if ( i - max.position == 0) {
        max.position = i + 1;
        max.value = nextHeight;
      } else {
        return false;
      }
    }
  }
  return downs
}

checkSledJump([1, 2, 3, 2, 1]) // true: sube y baja de forma estricta
checkSledJump([0, 1, 0]) // -> true: sube y baja de forma estricta
checkSledJump([0, 3, 2, 1]) // -> true: sube y baja de forma estricta
checkSledJump([0, 1000, 1]) // -> true: sube y baja de forma estricta

checkSledJump([2, 4, 4, 6, 2]) // false: no sube de forma estricta
checkSledJump([1, 2, 3]) // false: sólo sube
checkSledJump([1, 2, 3, 2, 1, 2, 3]) // false: sube y baja y sube... ¡no vale!