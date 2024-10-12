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
// console.log(employe)


