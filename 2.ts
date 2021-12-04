const carta = 'bici coche balón _playstation bici coche peluche  '

type CountGift = { [key: string]: number }

const isAvailable = (gift: string): boolean => {
  return gift[0] !== '_' && gift.length > 0;
}

const listGifts = (letter: string) => {
  const gifts = letter.split(" ");
  let countGift: CountGift = {};
  
  for (let i = 0; i < gifts.length; i++) {
    const gift: string = gifts[i];
    if (!isAvailable(gift)) continue

    if (!countGift[gift])
      countGift[gift] = 1;
    else countGift[gift] ++;
    
  }
  
  return countGift;
}

const regalos = listGifts(carta)

console.log(regalos)