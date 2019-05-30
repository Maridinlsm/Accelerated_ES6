export const theObject = () => {
    var obj1 = {
        a: 1        
    }
    var obj2 = {
        b: 2
    }
    var obj = Object.assign(obj1, obj2); 
    // Object.assign() combine number of objects
    console.log(obj);
}

// Object.assign() may applied to Classes and constructor properties
export const theObjectClass = () => {
    class Obj1 {
        constructor() {
            this.a = 1;
        }
    }
    class Obj2 {
        constructor() {
            this.b = 2
        }
    }
    // below is how to instansiate a class - new Obj()
    var obj1 = new Obj1();
    var obj2 = new Obj2();
    var obj12 = Object.assign(obj1, obj2);
    console.log('obj1, obj2', obj12);
    console.log('obj1', obj1);
    console.log('obj2', obj2);
    console.log(obj12 instanceof Obj2); // false
    // comparing of prototype
    console.log(obj12.__proto__ === Obj1.prototype); // true
    console.log(obj12.__proto__ === Obj2.prototype); // false
    console.log(obj12.__ptoto__ === Object.prototype); // false
    // the first object you place in Object.assign will be the base object
    // the first object will take the properties of the second & other object
    var obj21 = Object.assign(obj2, obj1);
    console.log('obj2, obj1', obj21);
    console.log('obj2', obj2);
    console.log('obj1', obj1);
    console.log(obj21.__proto__ === Obj2.prototype); // true

    var obj = Object.assign({}, obj1, obj2);
    console.log(obj.__proto__ === Obj1.prototype); // false
    console.log(obj.__proto__ === Object.prototype); //true
}

export const theObjectSetPrototypeOf= () => {
    let first = {
        name: 'Maridin'
    }
    let last = {
        name: 'San Miguel'
    }
    console.log(first.__proto__=== Object.prototype); // true
    Object.setPrototypeOf(first, last);
    // setPrototypeOf is same as Object.assign()
    // first object you place in will be the base object
    console.log(first.__proto__ === last); // false
    console.log(last.name);
}

export const mathObject = () => {
    let number = -10;
    console.log(Math.sign(number)); // -1
    number = 10;
    console.log(Math.sign(number)); // 1
    number = NaN;
    console.log(Math.sign(number)); // NaN
    number = 'IM DIN';
    console.log(Math.sign(number)); // NaN

    // Math.floor() will return a round-off value to lowest whole number
    number = 3.75;
    console.log(Math.floor(number)); // 3
    number = -3.75;
    console.log(Math.floor(number)); // 4
    // Math.trunc cut off the decimals
    number = 3.75;
    console.log(Math.trunc(number)); // 3
    number = -3.75;
    console.log(Math.trunc(number)); // 3
}

// string methods are case sensitive
// string methods return a boolean
export const theString = () => {
    let name = 'Maridin';
    console.log(name.startsWith('Mar'));
    console.log(name.startsWith('MAR'));
    console.log(name.endsWith('din'));
    console.log(name.endsWith('Din'));
    console.log(name.includes('Ma'));
    console.log(name.includes('rid'));
}

export const theNumberObject = () => {
    let number = NaN;
    console.log(isNaN(number));
    number = 'NaN'; //string
    console.log(isNaN(number));
    number = 1000000000000000000000000; // have limit
    console.log(isFinite(number));
    number = Infinity;
    console.log(Number.isFinite(number));
    console.log(!isFinite(number)); // is Infinite
    number = 10;
    console.log(Number.isInteger(number));
    number = 10.1; // float
    console.log(Number.isInteger(number));
}