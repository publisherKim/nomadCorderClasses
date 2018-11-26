const userInfo = {
  name: "aaa",
  age: 33,
  gender: "Male"
}
console.log(userInfo, console);

const sayHello = () => {
  return 'Hello!';
};

sayHello();

const sayHello2 = (parameter1, parameter2) => {
  return parameter1 + parameter2;
};

sayHello2('argument1', 'argument2');

// template literal
const sayHello3 = (name, age) => `Hello ${name} you are ${age} years old`;

sayHello3('somebodyName', 20);

// object methods
const caculator = {
  plus: (a, b) => a + b 
}

caculator.plus(5, 5);