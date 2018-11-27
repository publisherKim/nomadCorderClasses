"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Human {
    constructor(name, age, gender) {
        this.name = name;
        this.age = age;
        this.gender = gender;
    }
}
const lynn = new Human("Lynn", 17, "female");
console.log('instance type: ', typeof lynn, 'instance spec: ', lynn);
const sayHi = (person) => {
    return `Hello ${person.name}, you are ${person.age}, you are a ${person.gender}`;
};
console.log(sayHi(lynn));
//# sourceMappingURL=index.js.map