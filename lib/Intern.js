const Employee = require("./Employee");

class Intern extends Employee {
    constructor(name, id, email, school){
        // Calling Employee constructor
       super (name, id, email);

        // Adding github property    
        this.school = school;
    }

    // Return github from input
    getSchool() {
        return this.school;
    }

    // Override "Employee" role with "Engineer"
    getRole (){
        return "Intern";
    }
}

module.exports = Intern;

// const inquirer = require("inquirer");

// add functions
// function getSchool()
// function getRole() - returns 'Intern'

// function askIntern() {
//     return inquirer
//         .prompt([
//             {
//                 type: 'input',
//                 name: 'school',
//                 message: 'What school does the Intern attend?',
//             }
//         ]);
// };