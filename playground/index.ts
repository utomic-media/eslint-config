const _test = 1;
const _test2 = 2;

const myAny = 'any';
const _myAnyCopy = myAny as any;

const _testObj = {
  test: 1,
  test2: 2,
  'test3': 3
};

const _myString = 'string';
const _myString2 = 'string2';

// This is my class
class _MyClass { 
  constructor() {
    console.log('MyClass');
  }
  
  someMethod() {
    console.log('This is a method inside _MyClass');
  }
}