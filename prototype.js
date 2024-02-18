function Person(name,age){
    let person= Object.create(Person.prototype);
    person.name = name;
    person.age = age;
    return person;
}

// var obj4={
//     greet(){
//         console.log(`Hello ${this.name}`)
//     }
// }

Person.prototype.greet= function(){
    console.log(`Hello ${this.name}`)
}

let va= Person("Soumya",24)
va.greet()
console.log(va)