function wrapGifts(gifts) {
  if(gifts.lenth === 0) return [];
  
  const giftLength = gifts[0].length;
  const border = `**${'*'.repeat(giftLength)}`;
  
  let newGift = gifts.map(gift => `*${gift}*`);
  
  newGift.push(border);
  newGift.unshift(border);
  
  return newGift
}

wrapGifts(["📷", "⚽️"])
/* Resultado:
[ '****',
  '*📷*',
  '*⚽️*',
  '****'
]
*/

wrapGifts(["🏈🎸", "🎮🧸"])
/* Resultado:
[ '******',
  '*🏈🎸*',
  '*🎮🧸*',
  '******'
]
*/

wrapGifts(["📷"])
/* Resultado:
[ '****',
  '*📷*',
  '****'
]
*/

