export function removeRepeatedCharacters(str: string): string {
  const uniqueChars = [...new Set(str)];
  return uniqueChars.join("");
}

export function calculatePower(base: number, exponent: number): number {
  return Math.pow(base, exponent);
}

export function calculateSimpleInterest(
  principal: number,
  rate: number,
  time: number
): number {
  const interest = (principal * rate * time) / 100;
  return interest;
}

export function printOddNumbers(arr: number[]): void {
  const oddNumbers = arr.filter((num) => num % 2 !== 0);
  console.log("Odd Numbers:", oddNumbers);
}

export function printEvenNumbers(arr: number[]): void {
  const evenNumbers = arr.filter((num) => num % 2 === 0);
  console.log("Even Numbers:", evenNumbers);
}
