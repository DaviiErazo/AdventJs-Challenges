function countPackages(carriers, carrierID) {
	let count = 0;
  
  const carrier = carriers.find(carrier => carrier[0] === carrierID);
  
  const carrierIdName = carrier[0];
  const packages = carrier[1];
  const team = carrier[2];
    
  count =+ packages;
  
  for (let j=0; j<team.length; j++) {
    const coworker = team[j];
    count += countPackages(carriers, coworker);
	}
  
  return count;
}


const carriers = [
  ['dapelu', 5, ['midu', 'jelowing']],
  ['midu', 2, []],
  ['jelowing', 2, []]
]

countPackages(carriers, 'dapelu') // 9
// 5 de dapelu, 2 de midu y 2 de jelowing = 9


const carriers2 = [
  ['lolivier', 8, ['camila', 'jesuspoleo']],
  ['camila', 5, ['sergiomartinez', 'conchaasensio']],
  ['jesuspoleo', 4, []],
  ['sergiomartinez', 4, []],
  ['conchaasensio', 3, ['facundocapua', 'faviola']],
  ['facundocapua', 2, []],
  ['faviola', 1, []]
]

countPackages(carriers2, 'camila') // 15
// 5 de camila, 4 de sergiomartinez, 3 de conchaasensio, 2 de facundocapua y 1 de faviola = 15