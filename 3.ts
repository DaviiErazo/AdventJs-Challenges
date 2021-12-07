
class StackKeys {
  private keys: string[];
  private openKey: string[] = ['(', '[', '{'];
  private keyMap: Record<string, string> = { '(': ')', '[': '[', '{': '}' };

  constructor() {
    this.keys = [];
  }

  public length() {
    return this.keys.length;
  }

  public push(value: string) {
    this.keys.push(value);
  }

  public pop(): string {
    return this.keys.pop();
  }

  public isOpen(key: string) {
    return this.openKey.includes(key);
  }

  public verifyKeyIsClosed(current: string, top: string) {
    return this.keyMap[current] === top;
  }

  public isKey(character: string) {
    return ['(',')','[',']','{','}'].includes(character);
  }
}

function isValid(letter: string) {
  const stackKeys = new StackKeys();
  
  for(let character of letter.split('')) {
    if (stackKeys.isOpen(character)) {
      stackKeys.push(character);
    } else {
      const top = stackKeys.pop();
      const closes = stackKeys.verifyKeyIsClosed(character, top);

      if (!closes && stackKeys.isKey(character)) {
        return false
      };
    }
  }
  
  return stackKeys.length() === 0;
}

const letter = 'peluche (bici [coche) bici coche balón';

console.log(isValid(letter));
