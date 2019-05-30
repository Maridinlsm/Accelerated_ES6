// Iterators are all objects that know how to access values in a collection One-at-a-time
// an iterator has a function – next() – which allows you to output values step by step
// Generators are functions which don’t necessarily run to the end upon execution
// upon each call they yield a value.
export const iteratorBasics = () => {
    let array = [1,2,3];
    console.log(typeof array[Symbol.iterator]);

    let iterator = array[Symbol.iterator]();
    console.log(iterator.next());
    console.log(iterator.next());
    console.log(iterator.next());
    console.log(iterator.next());
}

export const iteratorAction = () => {
    let array = [1, 2, 3];
    array[Symbol.iterator] = function() {
        let nextValue = 10;
        return {
            next: function() {
                nextValue++;
                return {
                    done: nextValue > 14 ? true : false,
                    value: nextValue
                };
            }
        };
    } 
    for (let item of array) {
        console.log(item);
    }
}

export const customIterateable = () => {
    let person = {
        name: 'Din',
        hobbies: ['Music', 'Reading'],
        [Symbol.iterator]: function() {
            let hobbies = this.hobbies;
            let i = 0;
            return {
                next: function() {
                    let value = hobbies[i];
                    i++;
                    return {
                        done: i > hobbies.length ? true : false,
                        value: value
                    }
                }
            } 
        }
    }
    for (let hobby of person) {
        console.log(hobby);
    }

}

export const genaratorBasic = () => {
    function *select() {
        yield 'Piano';
        yield 'Guitar';
    }
    let iterator = select();
    console.log(iterator.next());
    console.log(iterator.next());
    console.log(iterator.next());
}

export const generatorAction = () => {
    let obj = {
        [Symbol.iterator]: gen1
    }
    function *gen1() {
        yield 1;
        yield 2;
        yield 3;
    }
    for (let item of obj) {
        console.log('item', item);
    }


    function *gen(end) {
        for (let i = 0; i<end; i++) {
            yield i;
        }
    }
    let iterator = gen(3);
    console.log(iterator.next());
    console.log(iterator.next());
    console.log(iterator.next());
    console.log(iterator.next());
}

export const throwReturn = () => {
    function *gen(end) {
        for (let i = 0; i<end; i++) {
            try {
                yield i;
            } catch (e) {
                console.log(e)
            }
        }
    }
    let iterator = gen(5);
    console.log(iterator.next());
    console.log(iterator.throw('An error occured'));
    console.log(iterator.next());
    console.log(iterator.next());
    console.log(iterator.return('An error occured'));
    console.log(iterator.next());
}