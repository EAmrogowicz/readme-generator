// fs is a Node standard library package for writing file
const fs = require("fs");
// generate path to the file
const path = require("path");
// prompt for questions
const inquirer = require("inquirer");
// creates data to be written down by fs
const generateMarkdown = require("./utils/generateMarkdown");

// console.log(generateMarkdown({ title: "Ewelina" }));

// list of licenses
// const gitHubLicenses = {
//   mit: "https://github.com/git/git-scm.com/blob/main/MIT-LICENSE.txt",
// };

inquirer
  .prompt([
    {
      type: "input",
      message: "Write title of your project",
      name: "title",
    },
    {
      type: "input",
      message: "Write project description",
      name: "description",
    },
    {
      type: "input",
      message: "Write project installation",
      name: "installation",
    },
    {
      type: "input",
      message: "Write project usage",
      name: "usage",
    },
    {
      type: "list",
      message: "Choose license",
      choices: [
        "N/A",
        "MIT",
        "GNU General Public License v3.0",
        "Academic Free License v3.0",
      ],
      name: "license",
    },
  ])
  .then((answers) => {
    console.log(answers);

    const generateMD = generateMarkdown(answers);

    fs.writeFile("test.txt", generateMD, (err) =>
      err ? console.error(err) : console.log("Success!")
    );
  })
  .catch((error) => {
    if (error.isTtyError) {
      // Prompt couldn't be rendered in the current environment
    } else {
      // Something else went wrong
    }
  });

// function to write README file
function writeToFile(fileName, data) {}

// function to initialize program
function init() {}

// function call to initialize program
init();
