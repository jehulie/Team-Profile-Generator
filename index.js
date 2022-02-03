// const Prompt = require('./src/Prompt');
const generateHTML = require('./src/generateHTML');
const fs = require('fs');
const path = require('path');

const outputDir = path.resolve(__dirname, 'dist');
const outputPath = path.join(outputDir, 'index.html');

// Inquirer helper function
const inquirer = require('inquirer');
const Manager = require('./lib/Manager');
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern');

const employeeArr = []

function Prompt() {
    return inquirer
    .prompt([
    {
        type: 'list',
        name: 'role',
        message:"What is the employee's role?",
        choices: ['Manager', 'Engineer', 'Intern']
    },
    {
        type:'text',
        name: 'name',
        message: "What is the Employee's name?"
    },
    {
        type:'text',
        name: 'id',
        message: "What is the employee's ID number?"
    },
    {
        type: 'text',
        name: 'email',
        message: "What is the employee's email?"
    }])
    .then(({name, id, email, role}) => {
        if (role === "Manager") {
            return inquirer
                .prompt([{
                    type:'text',
                    name: 'office',
                    message:"What is the Manager's office number?"
                },
                {
                    type:'confirm',
                    name:'anotherEntry',
                    message: "Would you like to add another employee?",
                    default: false
                }])
                .then(({office, anotherEntry}) => {
                    employeeArr.push(new Manager(name, id, email, office))
                    console.log(employeeArr)
                    if (anotherEntry) {
                        return Prompt();
                    }
                })
        } else if (role === "Engineer") {
            return inquirer
                .prompt([{
                    type: 'text',
                    name: 'github',
                    message: "What is the Engineer's Github username?"
                },
                {
                    type:'confirm',
                    name:'anotherEntry',
                    message: "What you like to add another employee?",
                    default: false
                }])
                .then(({github, anotherEntry}) => {
                    employeeArr.push(new Engineer(name, id, email, github))
                    console.log(employeeArr)
                    if (anotherEntry) {
                        return Prompt();
                    }
                })
        } else if (role === 'Intern') {
             return inquirer
                .prompt([{
                    type:'text',
                    name:'school',
                    message: "What is the Intern's school?"
                },
                {
                    type:'confirm',
                    name:'anotherEntry',
                    message: "What you like to add another employee?",
                    default: false
                }])
                .then(({school, anotherEntry}) => {
                    employeeArr.push(new Intern(name, id, email, school))
                    console.log(employeeArr)
                    if (anotherEntry) {
                        return Prompt();
                    }
                })
        }
    })
};

Prompt()
  .then(() => {

    fs.writeFile(outputPath, generateHTML(employeeArr), (err) =>
      err ? console.log(err) : console.log('Successfully created index.html!')
    );
  });