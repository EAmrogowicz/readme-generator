// fs is a Node standard library package for writing file
const fs = require("fs");
// generate path to the file
const path = require("path");
// prompt for questions
const inquirer = require("inquirer");
const util = require("util");
// creates data to be written down by fs
const generateMarkdown = require("./utils/generateMarkdown");

const writeFileAsync = util.promisify(fs.writeFile);

// Request for information
const promptUser = () =>
  inquirer.prompt([
    {
      type: "input",
      message: "What is title of your project:",
      name: "title",
    },
    {
      type: "input",
      message: "What is the project description:",
      name: "description",
    },
    {
      type: "input",
      message: "What is the project installation:",
      name: "installation",
    },
    {
      type: "input",
      message: "What is the project usage:",
      name: "usage",
    },
    {
      type: "list",
      message: "What is the project license, choose one from the list: ",
      choices: [
        "N/A",
        "MIT",
        "GNU General Public License v3.0",
        "Apache License 2.0",
        "Boost Software License 1.0",
      ],
      name: "license",
    },
    {
      type: "input",
      message: "What is your project contributing in:",
      name: "contributing",
    },
    {
      type: "input",
      message: "Write are the project tests:",
      name: "tests",
    },
    {
      type: "input",
      message: "Write your gitHub username:",
      name: "username",
    },
    {
      type: "input",
      message: "Write your email:",
      name: "email",
    },
  ]);

// function to write README file
promptUser()
  .then((answers) => writeFileAsync("test.md", generateMarkdown(answers)))
  .then(() => console.log("Success!"))
  .catch((err) => console.error(err));

// function to initialize program
function init() {}

// function call to initialize program
init();
