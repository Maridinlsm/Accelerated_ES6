// WHY than the old way
// Its a central repository
// Reflect object in good practice than the other scattered out places

export const reflectConstruct = () => {
  class Person {
    constructor(name) {
      this.name = name;
    }
  }

  function TopObj() {
    this.age = 27;
  }

  let person = Reflect.construct(Person, ['Max'], TopObj);
  // parameter - Reflect.construct(class or function, argument value), optional: constructor function;
  //  to overwrite the proptotype
  // create a prototype and assign it to an class
  // const person = new Person;

  // console.log(person instanceof Person);
  console.log(person.__proto__ === TopObj.prototype);
};

export const reflectApply = () => {
  class Person {
    constructor(name, age) {
      this.name = name;
      this.age = age;
    }

    greet(prefix) {
      console.log(prefix + 'Hello, I am ' + this.name);
    }
  }

  let person = Reflect.construct(Person, ['Max', 27]);
  // let person = new Person('Max', 27)  | similar
  Reflect.apply(person.greet, person, []);
  Reflect.apply(person.greet, {}, []);
  Reflect.apply(person.greet, { name: 'Maridin' }, ['She said: ']);
};

export const reflectPrototype = () => {
  class Person {
    constructor(name, age) {
      this.name = name;
      this.age = age;
    }
  }

  let person = new Person();

  Person.prototype.age = 27;

  let proto = {
    age: 30,
    greet() {
      console.log('Hello!');
    },
  };
  Reflect.setPrototypeOf(person, proto);
  Reflect.apply(person.greet, null, []);
  console.log(Reflect.getPrototypeOf(person));
};

export const reflectGet = () => {
  class Person {
    constructor(name, age) {
      this._name = name; // this._name = name;
      this.age = age;
    }
    get name() {
      return this._name;
    }
    set name(value) {
      this._name = value;
    }
  }

  const mum = {
    _name: 'Mum',
  };

  const person = new Person('Max', 27);
  // set() seter
  Reflect.set(person, 'name', 'Maridin', mum);
  console.log(mum);
  // get() geter
  console.log('get: ', Reflect.get(person, 'name', mum));
  // has() checker
  console.log('has: ', Reflect.has(person, 'name'));
  // ownKeys() get the constructor object
  console.log('ownKeys: ', Reflect.ownKeys(person));
  Reflect.defineProperty(person, 'hobies', {
    writable: true, // can rewrite
    value: ['Sports', 'Cooking'],
  });
  person.hobbies = ['Nothing'];
  console.log(person.hobbies);
  // delete property keyword
  delete person.age;
  console.log('person.age', person.age);
  // deleteProperty() deleting property
  Reflect.deleteProperty(person, 'hobbies');
  console.log('person.hobbies', person.hobbies);
  // isExtensible() check if property is extensible
  console.log('isExtensible', Reflect.isExtensible(person));
  // preventExtension() do not allow addetional property to be added
  Reflect.preventExtensions(person, 'music', {
    value: ['Pop', 'Jazz'],
  });
  console.log('isExtensible', Reflect.isExtensible(person));

  console.log('person.music', person.music);
};

// search: JS OBJECT DEFINE PROPERTY (MDN article)
