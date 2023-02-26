// fs is a Node standard library package for writing file
const fs = require("fs");
// generate path to the file
const path = require("path");

const https = require("https");
// prompt for questions
const inquirer = require("inquirer");
// creates data to be written down by fs
const generateMarkdown = require("./utils/generateMarkdown");

// console.log(generateMarkdown({ title: "Ewelina" }));

// list of licenses
const gitHubLicenses = {
  MIT: "https://raw.githubusercontent.com/git/git-scm.com/main/MIT-LICENSE.txt",
};

// function to write README file
function writeToFile(test, data) {
  const generateMD = generateMarkdown(data);

  fs.writeFile("test.md", generateMD, (err) =>
    err ? console.error(err) : console.log("Success!")
  );
}

// Request for information
inquirer
  .prompt([
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
        "Academic Free License v3.0",
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
  ])
  .then((answers) => {
    console.log(answers);

    if (answers.license == "N/A") {
    } else {
      const licenseUrl = gitHubLicenses[answers.license];
      https
        .get(licenseUrl, (res) => {
          res.on("data", (body) => {
            answers.licenseText = body.toString();
            writeToFile("test", answers);
          });
        })
        .on("error", (e) => {
          console.log(e);
        });
    }
  })
  .catch((error) => {
    if (error.isTtyError) {
      console.log(error);
    } else {
      console.log("Unexpected Error");
    }
  });

// function to initialize program
function init() {}

// function call to initialize program
init();
