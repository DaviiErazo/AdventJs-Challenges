
class StackKeys {
  private keys: string[];
  private openKey: string[] = ['(', '[', '{'];
  private keyMap: Record<string, string> = { '(': ')', '[': ']', '{': '}' };

  constructor() {
    this.keys = [];
  }

  public length() {
    return this.keys.length;
  }

  public push(value: string) {
    this.keys.push(value);
  }

  public list(): string[] {
    return this.keys;
  }

  public pop(): string {
    return this.keys.pop();
  }

  public isOpen(key: string) {
    return this.openKey.includes(key);
  }

  public verifyKeyIsClosed(current: string, top: string) {
    return this.keyMap[top] === current;
  }

  static isKey(character: string) {
    return ['(',')','[',']','{','}'].includes(character);
  }
}

function clearLetter(letter: string): string {
  let letterFormated: string = "";
  
  for (let character of letter) {
    if(StackKeys.isKey(character)) {
      letterFormated = letterFormated + character;
    }
  }
  
  return letterFormated;
}

function isValid(letter: string) {
  const stackKeys = new StackKeys();
  const letterCleaned = clearLetter(letter);
  
  for(let character of letterCleaned) {
    if (stackKeys.isOpen(character)) {
      stackKeys.push(character);
    } else {
      const top = stackKeys.pop();
      const closes = stackKeys.verifyKeyIsClosed(character, top);
      if (!closes) {
        return false
      };
    }
  }
  
  return stackKeys.length() === 0;
}

const letter = 'peluche (bici [coche) bici coche balón';

console.log(isValid(letter));
