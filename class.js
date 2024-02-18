class Person {
    constructor (name,age){
        this.name=name;
        this.age = age;
    }
    greet(){
        console.log("hello")
    }
}

let user = new Person("John",9);
console.log(user);
