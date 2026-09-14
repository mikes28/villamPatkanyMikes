export class ElectricRat {
  /**
   * @param {string} name szöveg, nem lehet üres
   * @param {number} atk pozitív egész
   * @param {number} hp pozitív egész
   */

  name: string;
  atk: number;
  hp: number;

  constructor(name: unknown, atk: unknown, hp: unknown) {
    if (typeof name !== "string"  || name.trim() === "") {
      throw new Error("Name must be a non-empty string");
    }
    if (typeof atk !== "number" || !Number.isInteger(atk) || atk <= 0) {
      throw new Error("Attack must be a positive integer");
    }
    if (typeof hp !== "number" || !Number.isInteger(hp) || hp <= 0) {
      throw new Error("Health must be a positive integer");
    }

    this.name = name.trim();
    this.atk = atk;
    this.hp = hp;
  }
}
