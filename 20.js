function pangram(letter) {
  const ALPHABET = 27;
  const wordMap = {};
  let wordCount = 0;
  
  for (const word of letter) {
    const wordNormalized = word.normalize('NFD').replace(/[`~!¡@#$%^&*()_|+\-=?;:'",.<>\{\}\[\]\\\/]|[\u0300-\u0301]|\s+/g,"");
    const wordNormalizedLowerCase = wordNormalized.toLowerCase();
    
    if (!wordMap[wordNormalizedLowerCase] && wordNormalizedLowerCase.length > 0) {
      wordCount += 1;
      wordMap[wordNormalizedLowerCase] = true;
    }
  }
  
  return wordCount == ALPHABET;
}


pangram('Extraño pan de col y kiwi se quemó bajo fugaz vaho') // true
pangram('Jovencillo emponzoñado y con walkman: ¡qué figurota exhibes!') // true

pangram('Esto es una frase larga pero no tiene todas las letras del abecedario') // false
pangram('De la a a la z, nos faltan letras') // false
