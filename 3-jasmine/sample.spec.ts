import "jasmine";
import { GeneratePESEL } from "../1-typescript-intro/sample-5-modules-1";

describe("Check if generator works coretly", () => {
  it("Check length of pesel and check data is on right place", () => {
    let checkDate: string = "79521";
    let b: Date = new Date("1979-05-21");
    const generatePesel = GeneratePESEL(b);
    console.log(generatePesel);
    let checkDateExists: boolean = checkDate === generatePesel.slice(0, 5);
    let checkLength: boolean = generatePesel.length === 10;
    expect(checkLength && checkDateExists).toBe(true);
  });
});
// Zadanie: Napisz test dla stworzonego generatora
