import { Animal } from "./animal";

export class Dog extends Animal {
  sound(): void {
    const sound = "Woof! Woof!!";
    console.log(`A dog barks ${sound}`);
  }
}
