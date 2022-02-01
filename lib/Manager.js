const Employee = require("./Employee");

class Manager extends Employee {
    constructor(name, id, email, officeNumber){
        // Calling Employee constructor
       super (name, id, email);

        // Adding github property    
        this.officeNumber = officeNumber;
    }

    // Return github from input
    getofficeNumber() {
        return this.officeNumber;
    }

    // Override "Employee" role with "Engineer"
    getRole (){
        return "Manager";
    }
}

module.exports = Manager;

// const inquirer = require("inquirer");

// function askManager() {
//     return inquirer
//         .prompt(
//             {
//                 type: 'input',
//                 name: 'officeNumber',
//                 message: 'Enter the office number of the Manager:',
//             });
// };