const fillReindeerMap = (ids) => {
  return ids.reduce((meindeerMap, meindeer) => {
    meindeerMap[meindeer] = meindeer;
    return meindeerMap
  }, {});
}

function missingReindeer(ids) {
	const meindeerMap = fillReindeerMap(ids);
  let isLast = true;
  
  for (let i = 0; i < ids.length; i++) {    
		if (meindeerMap[i] == undefined) {
      isLast = false;
      return i;
    }
  }
  
  if (isLast) return ids.length;
}

missingReindeer([5, 6, 1, 2, 3, 7, 0]) // -> 4
missingReindeer([0, 1]) // -> 2 (¡es el último el que falta!)
missingReindeer([3, 0, 1]) // -> 2
missingReindeer([9, 2, 3, 5, 6, 4, 7, 0, 1]) // -> 8
missingReindeer([0]) // -> 1 (¡es el último el que falta!)


// Podría ser la suma con todos los renos - suma total con renos perdidos