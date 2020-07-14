const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const inquirer = require("inquirer");
const path = require("path");
const fs = require("fs");
const jest = require("jest");

const OUTPUT_DIR = path.resolve(__dirname, "output");
const outputPath = path.join(OUTPUT_DIR, "team.html");

const render = require("./lib/htmlRenderer");

selectEmployeeType = () => {
    inquirer.prompt([
        {
            type: "list",
            name: "employeetype",
            message: "What position would you like to add?",
            choices: ["manager", "engineer", "intern", "finished"]

        }
    ])
    .then(answer => {
        switch (answer.employeetype){
            case "manager":
            addManager()
            break;

            case "engineer":
            addEngineer()
            break;

            case "intern":
                addIntern()
                break;

            case "finished":
                writeOuput()
                break;

        }
    })
}
let employees = []

addManager = () => {
    inquirer.prompt([
        {
            type: "input",
            name: "name",
            message: "What is their name?",
        },
        {
            type: "input",
            name: "id",
            message: "What is their ID?",
        },
        {
            type: "input",
            name: "email",
            message: "What is their email?",
        },
        {
            type: "input",
            name: "officeNumber",
            message: "What is their office number?",
        }
    ])
    .then(answers => {
        const newManager = new Manager(answers.name, answers.id, answers.email, answers.officeNumber);
        employees.push(newManager)
        selectEmployeeType()
    })
}

addEngineer = () => {
    inquirer.prompt([
        {
            type: "input",
            name: "name",
            message: "What is their name?",
        },
        {
            type: "input",
            name: "id",
            message: "What is their ID?",
        },
        {
            type: "input",
            name: "gitHub",
            message: "What is their github username?",
        },
        {
            type: "input",
            name: "email",
            message: "What is their email?",
        }
    ])
    .then(answers => {
        const newEngineer = new Engineer(answers.name, answers.id,answers.email, answers.gitHub);
        employees.push(newEngineer)
        selectEmployeeType()
    })
}
addIntern = () => {
    inquirer.prompt([
        {
            type: "input",
            name: "name",
            message: "What is their name?",
        },
        {
            type: "input",
            name: "id",
            message: "What is their ID?",
        },
        {
            type: "input",
            name: "email",
            message: "What is their email?",
        },
        {
            type: "input",
            name: "school",
            message: "What school did they attend?",
        }
    ])
    .then(answers => {
        const newIntern = new Intern(answers.name, answers.id, answers.email, answers.school);
        employees.push(newIntern)
        selectEmployeeType()
    })
}

writeOuput = () => {
    if (!fs.existsSync(OUTPUT_DIR)) {
        fs.mkdirSync(OUTPUT_DIR)
    }
    fs.writeFileSync(outputPath, render(employees), "UTF-8")
}
selectEmployeeType()


