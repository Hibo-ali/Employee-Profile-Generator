const generateHTML= require("./src/generateHTML");
// IMPORTS
const engineer = require("./lib/engineer");
const intern = require("./lib/intern");
const manager = require("./lib/manager");
const inquirer = require("inquirer");
const path = require("path");

// node modules
const fs = require("fs");
const { run } = require("jest");

//PATH
const OUTPUT_DIR = path.resolve(__dirname, "output");
const outputPath = path.join(OUTPUT_DIR, "team.html");

//VALIDATION FUNCTIONS
function validateInput(input) {
    if (input) {
      return true;
    }
    return "Please enter a value.";
  }
