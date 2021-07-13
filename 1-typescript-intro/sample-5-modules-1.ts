import * as moment from "moment";

let b = new Date("1979-05-21");
const GeneratePESEL = (b: Date | string): string => {
  let formatDate = moment(b).format("YYYY-DD-MM");
  console.log(formatDate);
  let splitFormatDate = formatDate.split("-");
  console.log(splitFormatDate);
  let year = Number(splitFormatDate[0].slice(2, 4));
  let month = Number(splitFormatDate[2]);
  let day = Number(splitFormatDate[1]);
  let x1: number = Math.floor(Math.random() * 9) + 1;
  let x2: number = Math.floor(Math.random() * 9) + 1;
  let x3: number = Math.floor(Math.random() * 9) + 1;
  let x4: number = Math.floor(Math.random() * 9) + 1;
  let c: number = Math.floor(Math.random() * 9) + 1;
  const pesel: string = `${year}${month}${day}${x1}${x2}${x3}${x4}${c}`;
  return pesel;
};
export { GeneratePESEL };
