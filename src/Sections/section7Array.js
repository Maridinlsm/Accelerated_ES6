export const Array1of2 = () => {
  let arrayLengthFive = Array(5);
  console.log('arrayLengthFive', arrayLengthFive);
  // create array lenght of 5 in array; data is undefined

  let array = Array.of(5, 10, 11);
  console.log('array', array);
  // Array.of(5, 10, 11); create array with elements (list of items) [5, 10, 11]

  let newArray = Array.from(array, val => val * 2);
  console.log('newArray', newArray);
  //   Array.from(array, val => val * 2) inherit an array property to new Array

  newArray.fill(100);
  console.log('newArray.fill', newArray);
  //   array.fill(elementToReplace, startIndex, endIndex)
  // startIndex = first element to replace and its succeding
  // endIndex = endIndex will not be replace

  console.log(array.find(val => val >= 12));
  // array.find(conmdition) = return first element found in the array
  //   only one element will be returned

  //   let array1 = [10, 11, 12];
  //   console.log(array1);

  var jrDev = [
    { name: 'carlo', age: 23 },
    { name: 'chelzea', age: 22 },
    { name: 'nicho', age: 23 },
    { name: 'victor', age: 22 },
    { name: 'maridin', age: 22 },
  ];
  function findCutie(cutie) {
    return cutie.name === 'maridin';
  }
  console.log('findCutie: ', jrDev.find(findCutie));
};

export const Array2of2 = () => {
  let array = [1, 2, 3];
  console.log(array.copyWithin(1, 2));
  console.log(array);

  array = [1, 2, 3];
  console.log(array.copyWithin(1, 0, 2));
  // changes the exsisting one
  // array.copyWithin(indexToBeReplace, indexToCopy)
  // array.copyWithin( startIndexToBeReplace, startIndexToCopy, endIndexToCopy)

  array = [1, 2, 3];
  let iterator = array.entries();

  for (let element of iterator) {
    console.log('for loop: ', element);
  }
};
