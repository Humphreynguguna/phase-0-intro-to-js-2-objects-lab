let employee={name: 'Kariuki', streetAddress:'Nairobi'};
function updateEmployeeWithKeyAndValue(employee, key, value){
    const newObject={...employee}
    newObject[key]=value;
    return newObject;
}
function destructivelyUpdateEmployeeWithKeyAndValue(employee, key, value){
    employee[key]=value;
    return employee;
}
function deleteFromEmployeeByKey(employee, key){
    let newObject2={...employee};
    delete newObject2[key];
    return newObject2;
}
function destructivelyDeleteFromEmployeeByKey(employee, key){
     delete employee[key];
return employee;
    }