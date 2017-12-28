class Person {
    constructor (name) {
        this.name = name;
    }
    hello() {
        if(typeof this.name === 'string'){
            return `Hello, I am ${this.name}!`;
        }else {
            return `Hello!`;
        }
    }
}

let person = new Person('Neo');
// var name = 'Jen Smith';

console.log(person.hello());