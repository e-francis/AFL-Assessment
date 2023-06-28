export function isPalindrome(str: string): boolean {
  const reversed = str.split("").reverse().join("");
  const isPalindrome = str === reversed;

  if (isPalindrome) {
    console.log(`${str} is a palindrome.`);
  } else {
    console.log(`${str} is not a palindrome.`);
  }

  return isPalindrome;
}

export function removeRepeatedCharacters(chars: string): string {
  const result: string[] = [];

  for (const char of chars) {
    const lowercaseChar = char.toLowerCase();

    if (!result.some((c) => c.toLowerCase() === lowercaseChar)) {
      result.push(char);
    }
  }

  return result.join("");
}

export function convertStringToUpperCase(str: string): string {
  return str.toUpperCase();
}

export function convertStringToSentenceCase(str: string): string {
  const firstChar = str.charAt(0).toUpperCase();
  const restOfStr = str.slice(1).toLowerCase();
  return firstChar + restOfStr;
}
