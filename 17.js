function countPackages(carriers, carrierID) {
	let count = 0;
  
  for (let i=0; i<carriers.length; i++) {
    const carrier = carriers[i];
    const carrierIdName = carrier[0];
    const packages = carrier[1];
    const team = carrier[3];
    
    if (carrierIdName == carrierID) {
      count =+ packages;
      if (team && team.length > 0) {
        for (let j=0; j<team.length; j++) {
          const coworker = team[j];
          console.log(coworker);
        }
      }
    }
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