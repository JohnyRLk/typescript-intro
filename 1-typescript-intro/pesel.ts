const GeneratePESEL = (): string => {
  let year: string = (Math.floor(Math.random() * (1900 - 2021 + 1)) + 2021)
    .toString()
    .slice(1, 3);
  let month: number = Math.floor(Math.random() * 12) + 1;
  let month31: number[] = [1, 3, 5, 7, 8, 10, 12];
  let month30: number[] = [4, 6, 9, 11];
  let day: number;
  if (month31.find((el) => (el = month))) {
    day = Math.floor(Math.random() * 31) + 1;
  } else if (month30.find((el) => (el = month))) {
    day = Math.floor(Math.random() * 30) + 1;
  } else {
    day = Math.floor(Math.random() * 29) + 1;
  }
  let x1: number = Math.floor(Math.random() * 9) + 1;
  let x2: number = Math.floor(Math.random() * 9) + 1;
  let x3: number = Math.floor(Math.random() * 9) + 1;
  let x4: number = Math.floor(Math.random() * 9) + 1;
  let c: number = Math.floor(Math.random() * 9) + 1;

  const pesel: string = `${year}${month}${day}${x1}${x2}${x3}${x4}${c}`;
  return pesel;
};
console.log(GeneratePESEL());
export { GeneratePESEL };
