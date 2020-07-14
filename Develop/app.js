const manager = require("./lib/Manager");
const engineer = require("./lib/Engineer");
const intern = require("./lib/Intern");
const inquirer = require("inquirer");
const path = require("path");
const fs = require("fs");

const OUTPUT_DIR = path.resolve(__dirname, "output");
const outputPath = path.join(OUTPUT_DIR, "team.html");

const render = require("./lib/htmlRenderer");

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
            name: "school",
            message: "What school did they attend?",
        }
    ])
    .then(answers => {
        const manager = new Manager(answers.name, answers.email, answers.id, answers.school);
        employees.push(manager)
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
        const engineer = new Engineer(answers.name, answers.email, answers.id, answers.school);
        employees.push(engineer)
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
        const intern = new Intern(answers.name, answers.email, answers.id, answers.school);
        employees.push(intern)
        selectEmployeeType()
    })
}

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

writeOuput = () => {
    if (!fs.existsSync(OUTPUT_DIR)) {
        fs.mkdirSync(OUTPUT_DIR)
    }
    fs.writeFileSync(outputPath, render(employees), "utf8")
}
selectEmployeeType()



// Write code to use inquirer to gather information about the development team members,
// and to create objects for each team member (using the correct classes as blueprints!)

// After the user has input all employees desired, call the `render` function (required
// above) and pass in an array containing all employee objects; the `render` function will
// generate and return a block of HTML including templated divs for each employee!

// After you have your html, you're now ready to create an HTML file using the HTML
// returned from the `render` function. Now write it to a file named `team.html` in the
// `output` folder. You can use the variable `outputPath` above target this location.
// Hint: you may need to check if the `output` folder exists and create it if it
// does not.

// HINT: each employee type (manager, engineer, or intern) has slightly different
// information; write your code to ask different questions via inquirer depending on
// employee type.

// HINT: make sure to build out your classes first! Remember that your Manager, Engineer,
// and Intern classes should all extend from a class named Employee; see the directions
// for further information. Be sure to test out each class and verify it generates an
// object with the correct structure and methods. This structure will be crucial in order
// for the provided `render` function to work! ```
