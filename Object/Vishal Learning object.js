// when we use a function inside of object that is called method in JS

const employe = {
    name:'Vishal',
    age: 22,
    designation: 'software Engineer 1',
    getPersonInfo: function(company){
        return `Employe name is ${this.name} and his age is ${this.age} and his designation ${this.designation} and he is from ${company}`
    }
}

console.log(employe.getPersonInfo('Google'));



//This code is a for...in loop used to iterate over all the enumerable properties of the employe object. Here's a short explanation:

//Prop is a variable who is stoeing the all key of object 
//in this code we are assigning the employe value in prop variable
//if you want to get the value you shoud alway remember to use ${prop} - ${employe[prop]} this syntex first is key then second is value


for (let prop in employe) {
    console.log(`${prop} - ${employe[prop]}`)
}
// console.log(employe)


