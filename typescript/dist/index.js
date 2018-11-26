"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const name = 'Hong', age = 24, gender = 'male';
const sayHi = (name, age, gender) => {
    console.log(`Hello ${name}, you are ${age}, you are a ${gender}`);
    return true;
};
const sayHiVoid = (name, age, gender) => {
    console.log(`Hello ${name}, you are ${age}, you are a ${gender}`);
};
sayHi('Nicolas', 444, 'male');
sayHiVoid(name, age, gender);
//# sourceMappingURL=index.js.map