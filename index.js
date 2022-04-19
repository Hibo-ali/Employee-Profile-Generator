const generateHTML= require("./src/generateHTML");
// IMPORTS
const Engineer = require("./lib/engineer");
const Intern = require("./lib/intern");
const Manager = require("./lib/manager");
const inquirer = require("inquirer");
const path = require("path");

// node modules
const fs = require("fs");
const { run } = require("jest");

//PATH
const OUTPUT_DIR = path.resolve(__dirname, "output");
const OUTPUTpath = path.join(OUTPUT_DIR, "team.html");


//INQUIRER
function runInquirer() {
    inquirer
      .prompt(employeeQuestionsArray)
      .then(function (answers) {
        employeesInformation.push(answers);
  
        if (answers.addAnother == "Yes, add another.") {
          runInquirer();
        } else {
          //Filter out Managers and convert to objects
          const managersInfo = employeesInformation.filter(({ role }) => {
            return role == "Manager";
          });

//VALIDATION FUNCTIONS
function validateInput(input) {
    if (input) {
      return true;
    }
    return "Please enter a value.";
  }

  function validateEmail(email) {
    // console.log(/\S+@\S+\.\S+/.test(email));
    if (/\S+@\S+\.\S+/.test(email)) {
      return /\S+@\S+\.\S+/.test(email);
    }
    return "Please enter a valid email address.";
  }



// EMPLOYEE PROMPTS ARRAYS
const employeesInformation = [];
const employeeQuestionsArray = [
  {
    type: "input",
    name: "name",
    message: "Enter the employee's name:",
    validate: validateInput,
},
{
  type: "input",
  name: "id",
  message: "Enter the employee's ID:",
  validate: validateInput,
},
{
    type: "list",
    name: "role",
    message: "Choose the employee's role:",
    choices: ["Manager", "Engineer", "Intern"],
},
  {
    type: "input",
    name: "email",
    message: "Enter the employee's email:",
    validate: validateEmail,
},
{
    type: "input",
    name: "officeNumber",
    message: "Enter manager's office number:",
    validate: validateInput,
    when: function (response) {
      return response.role == "Manager";
    },
},
{
    type: "input",
    name: "github",
    message: "Enter engineer's GitHub username:",
    validate: validateInput,
    when: function (response) {
      return response.role == "Engineer";
    },
},
{
    type: "input",
    name: "school",
    message: "Enter intern's school name:",
    validate: validateInput,
    when: function (response) {
      return response.role == "Intern";
    },
},
{
    type: "list",
    name: "addAnother",
    message: "Add another employee?",
    choices: ["Yes, add another.", "No, render my new page."],
},
];

const managersInfo = [];

managersInfo.forEach((manager) => {
  const member = new Manager(
    manager.name,
    manager.id,
    manager.email,
    manager.officeNumber
  );
  managersInfo.push(member);
});