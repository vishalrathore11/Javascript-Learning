//Object literal

const employee =  {
    name : 'vishal',
    age: 22,
    'is Active': true,
    getEmployeeInfo: function(city){
       return `Employee name is ${this.name} and status is ${this.isActive} from ${city}` 
    }
}

employee.project = 'Coty';

console.log(employee.getEmployeeInfo('Bangalore'))
console.log(employee['is Active'])