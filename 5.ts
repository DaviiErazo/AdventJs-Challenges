function daysToXmas(date: Date) {
  const pivot = new Date('Dec 25, 2021');
  const daysLeftOnMilliseconds = pivot.getTime() - date.getTime();
  const daysLeft = Math.round(daysLeftOnMilliseconds/(1000*60*60*24));
  
  console.log(daysLeftOnMilliseconds/(1000*60*60*24));
  
  return daysLeft;
}

const date = new Date('Dec 23, 2021 23:59:59')

console.log(daysToXmas(date));
