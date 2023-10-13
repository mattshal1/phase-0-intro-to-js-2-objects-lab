let employee = {
    name: 'Sam',
    age: 28
  };
  
  function updateEmployeeWithKeyAndValue(employee, key, value) {
    return {...employee, [key]: value};
  }
  
  function destructivelyUpdateEmployeeWithKeyAndValue(employee, key, value) {
    employee[key] = value;
    return employee;
  } 
  
  function deleteFromEmployeeByKey(employee, key) {
    const cloned = {...employee};
    delete cloned[key];
    return cloned;
  }
  
  function destructivelyDeleteFromEmployeeByKey(employee, key) {
    delete employee[key]; 
    return employee;
  }
  
  module.exports = {
    employee,
    updateEmployeeWithKeyAndValue,
    destructivelyUpdateEmployeeWithKeyAndValue,
    deleteFromEmployeeByKey,
    destructivelyDeleteFromEmployeeByKey  
  };