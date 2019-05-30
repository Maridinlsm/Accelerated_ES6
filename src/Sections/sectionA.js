export const proxyReflect = () => {
  const Person = {
    age: 21,
    status: '',
  };
  const handler = {
    get: function(target, name) {
      return name in target ? target[name] : 'Nothing Exist';
    },
    set: function(target, property, value) {
      if (value.status) {
        Reflect.set(target, property, value);
        return true;
      } else {
        Reflect.set(target, property, {
          ...value,
          status: 'new',
        });
        return true;
      }
    },
  };

  const handlerProto = {
    get: function(target, name) {
      return name in target ? target[name] : 'Nothing Exist wrapped Proto';
    },
  };

  const proxy = new Proxy(Person, handler);
  console.log('proxy.name', proxy);

  const proxyProto = new Proxy({}, handler);
  const proxyProto1 = new Proxy(proxyProto, handlerProto);

  Reflect.setPrototypeOf(Person, proxyProto);
  console.log('proxyProto', Person.hobbies);

  Reflect.setPrototypeOf(Person, proxyProto1);
  console.log('proxyProto1', Person.hobbies);
};

// A Function can wrapped inside a proxy, validation purpose
// property access and
export const wrappingFunctionProxy = () => {
  const log = message => {
    console.log('Log entry created, message: ', message);
  };

  const handler = {
    apply: function(target, thisArgs, argumentList) {
      console.log('target: ', target);
      console.log('thisArgs: ', thisArgs);
      console.log('argumentList: ', argumentList);

      if (argumentList.length === 1) {
        return Reflect.apply(target, thisArgs, argumentList);
      }
    },
  };

  const proxy = new Proxy(log, handler);

  const data = ['Maridin', 22, 'SM'];
  console.log(data);
  proxy(data);
};

export const revokeProxy = () => {
  const person = {
    name: 'Maridin',
  };
  const handler = {
    get: function(target, property) {
      return Reflect.get(target, property);
    },
  };
  const { proxy, revoke } = Proxy.revocable(person, handler);

  // error when not comment
  // console.log(proxy.name);
  // revoke();
  console.log(proxy.name);
};
