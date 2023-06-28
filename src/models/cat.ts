import { Animal } from "./animal";

export class Cat extends Animal {
  sound(): void {
    const sound = "Meow";
    console.log(`A cat makes ${sound} sound`);
  }
}
