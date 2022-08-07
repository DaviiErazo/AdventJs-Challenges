function decodeNumbers(symbols) {
  const symbolsMap = {
    '.': 1,
    ',': 5,
    ':': 10,
    ';': 50,
    '!': 100
  }

  let decodeNumber = 0;

  for ( let i = 0; i < symbols.length; i ++) {
   const symbol = symbols[i];
   const symbolNumber = symbolsMap[symbol];
   const nextSymbolNumber = symbolsMap[symbols[i + 1]];

   if (!symbolNumber) return Number.NaN;

   if (symbolNumber < nextSymbolNumber) {
     decodeNumber -= symbolNumber;
   } else {
     decodeNumber += symbolNumber;
   }

  }
  return decodeNumber;
}


decodeNumbers('...') // 3
decodeNumbers('.,') // 4 (5 - 1)
decodeNumbers(',.') // 6 (5 + 1)
decodeNumbers(',...') // 8 (5 + 3)
decodeNumbers('.........!') // 107 (1 + 1 + 1 + 1 + 1 + 1 + 1 - 1 + 100)
decodeNumbers('.;') // 49 (50 - 1)
decodeNumbers('..,') // 5 (-1 + 1 + 5)
decodeNumbers('..,!') // 95 (1 - 1 - 5 + 100)
decodeNumbers('.;!') // 49 (-1 -50 + 100)
decodeNumbers('!!!') // 300
decodeNumbers(';!') // 50
decodeNumbers(';.W') // NaN