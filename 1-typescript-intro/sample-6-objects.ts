interface Context {
    name: string;
}
interface LoggerInterface{
    message:string;
    context: Context;
    str:string;
}

class Logger  implements LoggerInterface{
    message:string
    context: Context;
    str:string;
    constructor (currentContext: Context, str:string) {
        this.str = str
        this.context = currentContext;
    }
    log(message) {
        console.log( `${this.context.name}: ${message}`);
    }
}
let str : string= "Logger for ... initialized";
let currentModule:Context = { name: "sample-4-objects"}
let logger: Logger = new Logger(currentModule, str);

logger.log("Start logging...");
logger.log(str);
/* TODO: Dodaj wyświetlanie komunikaty "Logger for ... initialized" w konstruktorze obiektu Logger */

interface ComplexInterface {
    level: number;
    color?: string; // optional propery
    [idx: number]: string;  // array of string values
    [propName: string]: any; // any additional properties of any type
    getField(): number; // function
}

class ComplexClass implements ComplexInterface {
    [idx: number]: string;    [propName: string]: any;
    level: number;
    color?: string;
    getField(): number {
        throw new Error("Method not implemented.");
    }
}

/* TODO: Zdefiniuj interface dla klasy Logger, więcej informacji możesz znaleźć na stronie https://www.typescriptlang.org/docs/handbook/interfaces.html */

// Zadanie: Stwórz klasę generators udostępniającą metodę generującą pesel
class Generators{
    public day:number;
    public year:string;
    public month:number;
    public x1:number;
    public x2:number;
    public x3:number;
    public x4:number;
    public c:string;
    public pesel:string;
   public generatePESEL(){
    this.year  = (Math.floor(Math.random() * (1900 - 2021 + 1)) + 2021).toString().slice(1, 3)  
    this.month = Math.floor(Math.random() * 12) + 1;
    let month31 = [1,3,5,7,8,10,12]
    let  month30 = [4,6,9,11]
    if(month31.find(el => el = this.month) ){
        this.day = Math.floor(Math.random() * 31) + 1
    }else if(month30.find(el => el = this.month)){
        this.day = Math.floor(Math.random() * 30) + 1
    }else {
        this.day = Math.floor(Math.random() * 29) + 1
    }

     this.x1 =    Math.floor(Math.random() * 9) + 1;
     this.x2 =    Math.floor(Math.random() * 9) + 1;
     this.x3 =    Math.floor(Math.random() * 9) + 1;
     this.x4 =    Math.floor(Math.random() * 9) + 1;

    let  characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    for (let i = 0; i < 1; i++ ) {
    this.c = characters.charAt(Math.floor(Math.random() * characters.length))
    this.pesel = `${this.year}-${this.month}-${this.day}-${this.x1}-${this.x2}-${this.x3}-${this.x4}-${this.c}`
    return this.pesel;
   }
}}
let peselGenerate  = new Generators();
console.log(peselGenerate.generatePESEL());
