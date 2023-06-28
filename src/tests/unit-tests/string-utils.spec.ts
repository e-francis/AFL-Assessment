import { assert, expect } from "chai";
import {
  isPalindrome,
  convertStringToUpperCase,
  convertStringToSentenceCase,
} from "../../utils/string-utils";

describe("String Manipulations", () => {
  it("should return true if the word is a palindrome", () => {
    const word = "racecar";
    const result = isPalindrome(word);
    assert.isTrue(result, `${word} should be a palindrome`);
  });

  it("should return false if the word is not a palindrome", () => {
    const word = "hello";
    const result = isPalindrome(word);
    assert.isFalse(result, `${word} should not be a palindrome`);
  });

  it("should convert the string to uppercase", () => {
    const input = "changing the world!";
    const expectedOutput = "CHANGING THE WORLD!";
    const result = convertStringToUpperCase(input);
    expect(result).to.equal(expectedOutput);
  });

  it("should convert the string to sentence case", () => {
    const input = "cHaNgInG tHe WoRlD!";
    const expectedOutput = "Changing the world!";
    const result = convertStringToSentenceCase(input);
    expect(result).to.equal(expectedOutput);
  });
});
