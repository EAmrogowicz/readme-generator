const licenseList = require("./licenseList");
const licenseBadge = require("./licenseBadge");
const moment = require("moment"); // require
const year = moment().format("YYYY");

// function to generate markdown for README
function generateMarkdown(answers) {
  let licenseText;
  const githubLink = `[GitHub Link](https://github.com/${answers.username})`;
  const mailTo = `[my email](mailto:${answers.email})`;

  if (answers.license == "N/A") {
    licenseText = `This project does NOT have a license.`;
  } else if (answers.license == "MIT") {
    licenseText = `${answers.license}
    Copyright (c) ${year} ${answers.username}
    ${licenseList.MIT}`;
  } else {
    licenseText = `${answers.license};
    ${licenseList[answers.license]}`;
  }

  return `
# ${answers.title} 
${licenseBadge[answers.license]}

## Description
  ${answers.description}

## Installation
  ${answers.installation}

## Usage
  ${answers.usage}

## License
  ${licenseText}

## Contributing
  ${answers.contributing}

## Tests
  ${answers.tests}

## Questions
  If you have additional questions, send me a message at ${mailTo}.
  
  View more of my projects on my Github profile: ${githubLink} 
`;
}

module.exports = generateMarkdown;

//   ## ${answers.tableOfContent}
