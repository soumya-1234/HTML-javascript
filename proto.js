var obj2 = {
    fname: "John",
}

var obj1 ={
    lname: "Smith"
}

obj1.__proto__= obj2;

console.log(obj1.fname);
console.log(obj1)

//Prototype

var a1={
    fname: "Soumya"
}

a2= Object.create(a1);
a2.lname="Acharya"

console.log(a2);