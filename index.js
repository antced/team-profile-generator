const inquirer = require("inquirer");
const fs = require("fs");
const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const managerArr = [];
const engineerArr = [];
const internArr = [];
// prompt for manager
const makeManager = () => {
// GIVEN a command-line application that accepts user input
// WHEN I am prompted for my team members and their information
// WHEN I start the application
// THEN I am prompted to enter the team manager’s name, employee ID, email address, and office number
// WHEN I enter the team manager’s name, employee ID, email address, and office number
    inquirer
        .prompt([
            {
                type: "input",
                message: "What is the team manager's name?",
                name: "name",
            },
            {
                type: "input",
                message: "What is the team manager's employee ID?",
                name: "id",
            },
            {
                type: "input",
                message: "What is the team manager's email address?",
                name: "email",
            },
            {
                type: "input",
                message: "What is the team manager's office number?",
                name: "office",
            },
// THEN I am presented with a menu with the option to add an engineer or an intern or to finish building my team
            {
                type: "list",
                message: "What kind of employee would you like to add?",
                choices: ["Engineer", "Intern", "I am done adding employees."],
                name: "employee"
            }
        ])
        .then((response) => {
            const manager = new Manager(response.office);
            managerArr.push(manager);
            makeEmployee(response.employee);
        });
};
// prompt for other employees
const makeEmployee = (employeeType) => {
// WHEN I decide to finish building my team
// THEN I exit the application, and the HTML is generated
    if (employeeType === "I am done adding employees") {
        return
    } else if (employeeType === "Engineer") {
// WHEN I select the engineer option
// THEN I am prompted to enter the engineer’s name, ID, email, and GitHub username, and I am taken back to the menu
        inquirer
            .prompt([
                {
                    type: "input",
                    message: "What is the engineer's name?",
                    name: "name",
                },
                {
                    type: "input",
                    message: "What is the engineer's ID?",
                    name: "id",
                },
                {
                    type: "input",
                    message: "What is the engineer's address?",
                    name: "email",
                },
                {
                    type: "input",
                    message: "What is the engineer's GitHub username?",
                    name: "github",
                },
                {
                    type: "list",
                    message: "What kind of employee would you like to add?",
                    choices: ["Engineer", "Intern", "I am done adding employees."],
                    name: "employee"
                }
            ])
            .then((response) => {
                const engineer = new Engineer(response.github);
                engineerArr.push(engineer);
                makeEmployee(response.employee);
            });
    } else if (employeeType === "Intern") {
// WHEN I select the intern option
// THEN I am prompted to enter the intern’s name, ID, email, and school, and I am taken back to the menu
        inquirer
            .prompt([
                {
                    type: "input",
                    message: "What is the intern's name?",
                    name: "name",
                },
                {
                    type: "input",
                    message: "What is the intern's ID?",
                    name: "id",
                },
                {
                    type: "input",
                    message: "What is the intern's email address?",
                    name: "email",
                },
                {
                    type: "input",
                    message: "What is the intern's school?",
                    name: "school",
                },
                {
                    type: "list",
                    message: "What kind of employee would you like to add?",
                    choices: ["Engineer", "Intern", "I am done adding employees."],
                    name: "employee"
                }
            ])
            .then((response) => {
                const intern = new Intern(response.school);
                internArr.push(intern);
                makeEmployee(response.employee);
            });
    }
};

const managerCard = `
<div class="card p-0 m-2 shadow" style="width: 18rem;">
<div class="card-header bg-primary text-white">
<h5 class="card-title">${employee.name}</h5>
<h6 class="card-title">${employee.role}</h6>
</div>
<div class="card-body bg-light">
<ul class="list-group list-group-flush border">
<li class="list-group-item">ID: ${employee.id}</li>
<li class="list-group-item">Email: ${employee.email}</li>
<li class="list-group-item">Office Number: ${employee.office}</li>
</ul>
</div>
</div>`

const makeHTML = () => {
    console.log(managerArr)
}

// THEN an HTML file is generated that displays a nicely formatted team roster based on user input
// WHEN I click on an email address in the HTML
// THEN my default email program opens and populates the TO field of the email with the address
// WHEN I click on the GitHub username
// THEN that GitHub profile opens in a new tab

makeManager();
makeHTML()


