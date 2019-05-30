// Symbol is a unique ID
// Symbols are a new primitive type
// ask where do this usually use
// symbols are useful as object keys
export const symbolBasic = () => {
    let symbol = Symbol('debug'); // Symbol(key)
    console.log('symbol', symbol); // object Symbol
    console.log('symbol.toString()', symbol.toString()); // readbility purpose
    console.log('typeof symbol', typeof symbol); // it primitive type

    let anotherSymbol = Symbol('debug');
    console.log('symbol === anotherSymbol', symbol === anotherSymbol); // false
    // Symbols are unique ID

    let obj = {
        name: 'max',
        [symbol]: 22 // property inside [] is hidden or metadata??
    }
    console.log('obj', obj);
    console.log('obj[symbol]', obj[symbol]);
}

// usually use for secret code rooting
// deep way of rooting a property using by key of symbol
export const sharedSymbol = () => {
    let symbol1 = Symbol.for('age'); // Symbol.for, return symbol with maching key
    let symbol2 = Symbol.for('age'); 
    // Symbol.for() is registered in a global symbol registry
    console.log('symbol1 === symbol2', symbol1 === symbol2);

    let symbol = Symbol('age');

    let person = {
        name: 'Din'
    };

    function makeAge(person) {
        let ageSymbol = Symbol('age'); // key, need to access
        person[ageSymbol] = 22;
    }
    makeAge(person);
    console.log(person[symbol]); //undefined
    // thwy are not the same ID, no access
    // Reuse IDs vd Unique IDs
}

export const advantageSymbols = () => {
    let symbol = Symbol.for('age');

    let person = {
        name: 'Din',
        age: 30
    };

    function makeAge(person) {
        let ageSymbol = Symbol.for('age'); // key, need to access therfore use Symbol.for()
        person[ageSymbol] = 22;
    }
    makeAge(person);
    console.log(person[symbol]); //undefined
    console.log(person["age"]);
}

// Well-known symbols are defined already and offer some core functionality
//  some built-in symbols you may utilize to overwrite default behaviors of JavaScript
//  TCalled, meta-programming (i.e. changing parts of thelanguage/ its behavior)
export const wellKnownSymbols = () => {
    class Person {
    
    }
    Person.prototype[Symbol.toStringTag] = 'Person';
    let person = new Person();
    console.log(person);

    let numbers = [1, 2, 3];
    numbers[Symbol.toPrimitive] = function() {
        return 999;
    }
    console.log(numbers + 1);
    // primitive, allows to  overwrite built-in object
}