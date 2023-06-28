import { assert } from "chai";
import sinon from "sinon";

import { Cat } from "../../models/cat";
import { Dog } from "../../models/dog";

describe("Animal Model", () => {
  describe("Cat", () => {
    it("should make Meow sound", () => {
      const cat = new Cat();
      const consoleLogStub = sinon.stub(console, "log");
      cat.sound();
      assert.strictEqual(
        consoleLogStub.calledWith("A cat makes Meow sound"),
        true
      );
      consoleLogStub.restore();
    });
  });

  describe("Dog", () => {
    it("should bark Woof", () => {
      const dog = new Dog();
      const consoleLogStub = sinon.stub(console, "log");
      dog.sound();
      assert.strictEqual(
        consoleLogStub.calledWith("A dog barks Woof! Woof!!"),
        true
      );
      consoleLogStub.restore();
    });
  });
});
