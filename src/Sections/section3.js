// import { __values } from "tslib";

export const section3one = () => {
    
    // class cannot be called the way as objects
    // it must be defined 'new' to call the function inside ex.(let helper = new Helper();)
    // but using 'static' it may be call as an object directly ex. (Helper.logTwo('Logged');)
    class Helper { // export class Helper {
       static logTwo(message) {
            console.log(message);
            console.log(message);
        }
    }

    // let helper = new Helper();
    Helper.logTwo('Logged!');

    class Section3 {
        constructor(name) {
            this.name = name;
        }
        greet() {
            console.log('Hello, my name is', this.name, '& I am', this.age);
        }
    }

    class Block extends Section3 {
        constructor(age) {
            super('Block'); // super() to call the parent constructor [super constructor]
            this.age = age;
        }
        greet() {
            console.log('Hello! this')
        }
        greetTwo(){
            super.greet();
            this.greet();
        }
    }

    let block = new Block('100');
    // block.greetTwo();
    // console.log(block.__proto__);
    // console.log(Block.prototype);
    // console.log('Block',block.__proto__ === Block.prototype);


    let section = new Section3('Jargons');
        // what are __proto__ prototypes?
    // console.log(section.__proto__);
    // console.log(Section3.prototype);
    // console.log('Section', section.__proto__ === Section3.prototype);
}

export const section3two = () => {
    //GETTER & SETTER

    class Jargons {
        constructor(name) {
            this._name = name; 
            // private _name cannot be access outside
        }
        get name() {
            console.log('get');
            return this._name.toUpperCase();
        }
        set name(value) {
            console.log('set');
            if (value.length > 2) {
                this._name = value;
            }
            else console.log('Rejected!');
        }
    }
    let jargons = new Jargons('Din');
    console.log(jargons.name); // call directly if not getter ex jargoms._name
    jargons.name = 'Din';
    console.log(jargons.name);
}

// extends the property of class with Array
export const subClassing = () => {
    class ConvertArray extends Array {
        convert() {
            let returnArray = [];
            this.forEach(value => returnArray.push('Converted!' + value));
            return returnArray;
        }
    }
    let numberArray = new ConvertArray();
    numberArray.push(1);
    numberArray.push(2);
    numberArray.push(3);
    console.log(numberArray.convert());
    console.log(numberArray.convert());

    let newArray = new ConvertArray();
    newArray.push(0);
    console.log(newArray.convert());
}