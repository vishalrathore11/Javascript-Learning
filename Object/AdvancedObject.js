const person = {};

const typeProp = {
    name: 'string',
    age: 'number'
}
const handler = {
    get(target,prop) {
        return target[prop] ? target[prop] : `${prop} doesn't exist`;
    },
    set(target,prop,value) {
        if(typeof value !== typeProp[prop] ) {
            console.log(`${prop} should have ${typeProp[prop]} instead it got ${typeof value}`);
            return false;
        }
        target[prop] = value;
        return true;
    }
}

const proxy = new Proxy(person,handler);
proxy.name = 'Vishal';
proxy.age = 23;
console.log(proxy.age)