import "jasmine";
import { GeneratePESEL } from "../1-typescript-intro/sample-5-modules-1";

describe("Check if generator works coretly", () => {
  let b: Date = new Date("1979-05-21");
  const generatePesel: string = GeneratePESEL(b);
  console.log(generatePesel);
  it("Check data is on right place", () => {
    let checkDate: string = "79521";
    let checkDateExists: boolean = checkDate === generatePesel.slice(0, 5);
    expect(checkDateExists).toBe(true);
  });
  it("Check length of pesel", () => {
    let checkLength: boolean = generatePesel.length === 10;
    expect(checkLength).toBe(true);
  });
});
// Zadanie: Napisz test dla stworzonego generatora
