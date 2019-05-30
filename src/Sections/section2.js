// 
export const objectLiteralExtension = () => {
    let name = 'Maridin'
    let age= 22;
    let ageField = "age";
    let obj = {
        "name": 'Dindin',
        [ageField]: 18, // declared here was used
        "greet me"() {
            console.log(this.name + ', ' + this.age);
        }
    };
    console.log(obj["age"]);
    obj["greet me"]();
}

// Spread used to split up an array to list of values
// Rest used in function in the list of arguments
export const restSpread = () => {
    let numbers = [1,2,3,4,5];
    console.log('Spread', ...numbers);
    console.log('nonSpread', numbers);
    function add(...toSum) {
      console.log('Rest as function argument', ...toSum);
      console.log('nonRest', ...toSum);
      let result = 0;
      for (let i=0; i < toSum.length; i++){
        result += toSum[i];
      } 
      return result;
    }
    console.log('add', add(...numbers));
}

// 'of' each value is assigned to every iteration of loop
export const forOfLoop = () => {
    let juniorDev = ['Carlo', 'Chelz', 'Maridin', 'Nicho', 'Victor'];
    for (let getWho of juniorDev) {
        console.log(getWho);
    }
}

// complex text
export const templateLiterals = () => {
    let name = 'Maridin';
    let caption1 = `
    What's on your mind ${name + '?'}
    `
    let caption2 = `
    What's on your mind \${name + '?'}
    `
    console.log(caption1);
    console.log(caption2, 'with backslash');
}

// direct assigning of values into variables aside from by index
// arrays are destructure by position / order / index
export const destructuringArrays = () => {
    let juniorDev = ['Carlo', 'Chelz', 'Maridin', 'Nicho', 'Victor'];
    let [a = 'Master', b, ...c] = juniorDev; // asigning default and using spread operator
    console.log(a, b, ...c);
    // let minusMe = juniorDev.filter(name => name !== 'Maridin');
    // console.log('minusMe', minusMe);
}

// objects are destructure by property name not by order
export const destructuringObject = () => {
    let devOps = {
        QA: 'Jeff',
        UX: 'MJ',
        ubidy: function() {
            console.log('Hello UBIDY!');
        }
    };
    let {QA: qa, ubidy: here} = devOps;
    // object can set alias but the initial naming will be not defined
    here();
    console.log(qa);
}