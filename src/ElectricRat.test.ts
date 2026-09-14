import { describe, it, expect } from "vitest";
import { ElectricRat } from "./ElectricRat";

describe("ElectricRat constructor test", () => {
  describe("Correct input", () => {
    it("Sets correct datasets with correct values", () => {
      const rat = new ElectricRat("testRat", 10, 15);
      expect(rat.name).toBe("testRat");
      expect(rat.atk).toBe(10);
      expect(rat.hp).toBe(15);
    });
    it("Tests for min value boundaries", () => {
      const rat = new ElectricRat("a", 1, 1);
      expect(rat.name).toBe("a");
      expect(rat.atk).toBe(1);
      expect(rat.hp).toBe(1);
    });
  });
});

describe("Incorrect name strings", () => {
  it("Exception error when name string is empty", () => {
    expect(() => new ElectricRat("", 10, 10)).toThrow();
  });

  it("Exception error when name string is only whitespace", () => {
    expect(() => new ElectricRat("        ", 10, 10)).toThrow();
  });

  it("Exception error when name isnt string", () => {
    expect(() => new ElectricRat(1, 10, 10)).toThrow();
    expect(() => new ElectricRat(null, 10, 10)).toThrow();
    expect(() => new ElectricRat(undefined, 10, 10)).toThrow();
  });
});

describe("Incorrect atack value", () => {
  it("Exception when attack is 0", () => {
    expect(() => new ElectricRat("a", 0, 10)).toThrow();
  });

  it("Exception when attack is negative", () => {
    expect(() => new ElectricRat("a", -1, 10)).toThrow();
  });

  it("Exception when attack isnt integer", () => {
    expect(() => new ElectricRat("a", 1.5, 10)).toThrow();
  });

  it("Exception when attack is given as a string string ", () => {
    expect(() => new ElectricRat("a", "10", 10)).toThrow();
  });
});

describe("Incorrect health value", () => {
  it("Exception when health is 0", () => {
    expect(() => new ElectricRat("a", 10, 0)).toThrow();
  });
it("Exception when health is negative", () => {
    expect(() => new ElectricRat("a", 10, -1)).toThrow();
});

it("Exception when health isnt integer", () => {
    expect(() => new ElectricRat("a", 10, 1.5)).toThrow();
});

it("Exception when health is given as a string string ", () => {
    expect(() => new ElectricRat("a", 10, "10")).toThrow();
});
});
