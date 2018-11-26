const name = 'Hong',
  age = 24,
  gender = 'male';

const sayHi = (name: string, age: number, gender: string): boolean => {
  console.log(`Hello ${name}, you are ${age}, you are a ${gender}`);
  return true;
};

const sayHiVoid = (name: string, age: number, gender: string): void => {
  console.log(`Hello ${name}, you are ${age}, you are a ${gender}`);
};

sayHi('Nicolas', 444, 'male');

sayHiVoid(name, age, gender);

export {};