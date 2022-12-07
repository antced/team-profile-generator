const inquirer = require("inquirer");
const fs = require("fs");
const Employee = require("./lib/Employee");
const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const managerArr = [];
const engineerArr = [];
const internArr = [];
const htmlEngineer = [];
const htmlIntern = [];
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
            const manager = new Manager(response.name, response.id, response.email, response.office);
            managerArr.push([manager]);
            makeEmployee(response.employee);
        });
};
// prompt for other employees
const makeEmployee = (employeeType) => {
    // WHEN I decide to finish building my team
    // THEN I exit the application, and the HTML is generated
    if (employeeType === "I am done adding employees.") {
        makeHTML();
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
                const engineer = new Engineer(response.name, response.id, response.email, response.github);
                engineerArr.push([engineer]);
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
                const intern = new Intern(response.name, response.id, response.email, response.school);
                internArr.push([intern]);
                makeEmployee(response.employee);
            });
    }
};
// THEN an HTML file is generated that displays a nicely formatted team roster based on user input
const makeHTML = () => {
    const htmlText =
        `<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<meta http-equiv="X-UA-Compatible" content="IE=edge">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.2.1/css/all.min.css">
<link href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.3/dist/css/bootstrap.min.css" rel="stylesheet"
integrity="sha384-rbsA2VBKQhggwzxH7pPCaAqO46MgnOM80zW1RWuH61DGLwZJEdK2Kadq2F9CUG65" crossorigin="anonymous">
<title>My Team</title>
</head>
<body>
<header>
<h1 class="bg-danger p-5 text-center text-white">My Team</h1>
</header>
<section class="container">
<div class="d-flex flex-wrap justify-content-center">
${appendManager()}
${appendEngineer()}
${appendIntern()}
</div>
</section>
<script src="https://cdn.jsdelivr.net/npm/bootstrap@5.2.3/dist/js/bootstrap.bundle.min.js"
integrity="sha384-kenU1KFdBIe4zVF0s0G1M5b4hcpxyD9F7jL+jjXkk+Q2h455rYXK/7HAuoJl+0I4"
crossorigin="anonymous"></script>
</body>
</html>`
    fs.writeFile('index.html', htmlText, (err) =>
        err ? console.error(err) : console.log("wrote to HTML"));
}

const appendManager = () => {
    const managerCard = `
    <div class="card p-0 m-2 shadow" style="width: 18rem;">
    <div class="card-header bg-primary text-white">
    <h5 class="card-title">${managerArr[0][0].getName()}</h5>
    <h6 class="card-title"><i class="fa-solid fa-mug-hot me-2"></i>${managerArr[0][0].getRole()}</h6>
    </div>
    <div class="card-body bg-light">
    <ul class="list-group list-group-flush border">
    <li class="list-group-item">ID: ${managerArr[0][0].getId()}</li>
    <li class="list-group-item">Email: <a href="mailto: ${managerArr[0][0].getEmail()}">${managerArr[0][0].getEmail()}</a></li>
    <li class="list-group-item">Office Number: ${managerArr[0][0].getOffice()}</li>
    </ul>
    </div>
    </div>`
    console.log("made manager card");
    return managerCard;
}

const appendEngineer = () => {
    if (engineerArr.length > 0) {
        for (const i in engineerArr) {
            const engineerCard =
                `<div class="card p-0 m-2 shadow" style="width: 18rem;">
<div class="card-header bg-primary text-white">
<h5 class="card-title">${engineerArr[i][0].getName()}</h5>
<h6 class="card-title"><i class="fa-solid fa-glasses me-2"></i>${engineerArr[i][0].getRole()}</h6>
</div>
<div class="card-body bg-light">
<ul class="list-group list-group-flush border">
<li class="list-group-item">ID: ${engineerArr[i][0].getId()}</li>
<li class="list-group-item">Email: <a href="mailto: ${engineerArr[i][0].getEmail()}">${engineerArr[i][0].getEmail()}</a></li>
<li class="list-group-item">GitHub: <a href="https://github.com/${engineerArr[i][0].getGitHub()}" target="_blank">${engineerArr[i][0].getGitHub()}</a></li>
</ul>
</div>
</div>`
            console.log("made engineer card");
            htmlEngineer.push(engineerCard);
        }
        return htmlEngineer.join("");
    }
}

const appendIntern = () => {
    if (internArr.length > 0) {
        for (const i in internArr) {
            const internCard =
                `<div class="card p-0 m-2 shadow" style="width: 18rem;">
<div class="card-header bg-primary text-white">
<h5 class="card-title">${internArr[i][0].getName()}</h5>
<h6 class="card-title"><i class="fa-solid fa-user-graduate me-2"></i>${internArr[i][0].getRole()}</h6>
</div>
<div class="card-body bg-light">
<ul class="list-group list-group-flush border">
<li class="list-group-item">ID: ${internArr[i][0].id}</li>
<li class="list-group-item">Email: <a href="mailto: ${internArr[i][0].getEmail()}">${internArr[i][0].getEmail()}</a></li>
<li class="list-group-item">School: ${internArr[i][0].getSchool()}</li>
</ul>
</div>
</div>`
            console.log("made intern card");
            htmlIntern.push(internCard);
        }
        return htmlIntern.join("");
    }
}
// WHEN I click on an email address in the HTML
// THEN my default email program opens and populates the TO field of the email with the address
// WHEN I click on the GitHub username
// THEN that GitHub profile opens in a new tab
makeManager();


