const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const inquirer = require("inquirer");
const path = require("path");
const fs = require("fs");

const OUTPUT_DIR = path.resolve(__dirname, "output");
const outputPath = path.join(OUTPUT_DIR, "team.html");

const render = require("./lib/htmlRenderer");

const util = require("util");
//jest runs tests
const jest = require("jest");
const generateHTML = require("./generateHTML")
//writeFile will create html page
const writeFileAsync = util.promisify(fs.writeFile);


function promptUser() {
  return inquirer.prompt([
      {
          type: "input",
          name: "nameManager",
          message: "Enter name of Manager: "
      },
      {
          type: "input",
          name: "idManager",
          message: "Enter ID of manager: "
      },
      {
          type: "input",
          name: "emailManager",
          message: "Enter email of manager: "
      },
      {
          type: "input",
          name: "officeManager",
          message: "Enter office number of manager: "
      },
      {
          type: "input",
          name: "nameEngineer1",
          message: "Enter name of engineer number 1: "
      },
      {
          type: "input",
          name: "idEngineer1",
          message: "Enter ID of engineer number 1: "
      },
      {
          type: "input",
          name: "emailEngineer1",
          message: "Enter email of engineer number 1: "
      },
      {
          type: "input",
          name: "githubEngineer1",
          message: "Enter GitHub Username of engineer number 1: "
      },
      {
          type: "input",
          name: "nameEngineer2",
          message: "Enter name of engineer number 2: "
      },
      {
          type: "input",
          name: "idEngineer2",
          message: "Enter ID of engineer number 2: "
      },
      {
          type: "input",
          name: "emailEngineer2",
          message: "Enter email of engineer number 2: "
      },
      {
          type: "input",
          name: "githubEngineer2",
          message: "Enter GitHub Username of engineer number 2: "
      },

      {
          type: "input",
          name: "nameEngineer3",
          message: "Enter name of engineer number 3: "
      },
      {
          type: "input",
          name: "idEngineer3",
          message: "Enter ID of engineer number 3: "
      },
      {
          type: "input",
          name: "emailEngineer3",
          message: "Enter email of engineer number 3: "
      },
      {
          type: "input",
          name: "githubEngineer3",
          message: "Enter GitHub Username of engineer number 3: "
      },
      

      {
          type: "input",
          name: "nameIntern",
          message: "Enter name of Intern: "
      },
      {
          type: "input",
          name: "idIntern",
          message: "Enter ID of Intern: "
      },
      {
          type: "input",
          name: "emailIntern",
          message: "Enter email of Intern:"
      },
      {
          type: "input",
          name: "linkedinIntern",
          message: "Enter linkedin account of intern: "
      },
     
  ]);
}


async function init() {
  console.log("True")
  try {
      const answers = await promptUser();
      const html = generateHTML(answers);

      await writeFileAsync("index.html", html);

      console.log("Successfully wrote to index.html");
  } catch (err) {
      console.log(err);
  }
}

init();
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
