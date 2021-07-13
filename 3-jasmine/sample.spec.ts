import "jasmine";
import { GeneratePESEL } from "../1-typescript-intro/sample-5-modules-1";

describe("Check if generator works coretly", () => {
  let b: Date = new Date("05-21-1979");
  const generatePesel: string = GeneratePESEL("05-21-1979");
  it("Check data is on right place", () => {
    let checkDate: string = "79521";
    let generatePeselSlice = generatePesel.slice(0, 5);
    expect(generatePeselSlice).toEqual(checkDate);
  });

  it("Check length of pesel", () => {
    console.log(generatePesel);
    expect(generatePesel.length).toEqual(10);
  });
});
