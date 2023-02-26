const licenseList = require("./licenseList");
const moment = require("moment"); // require
const year = moment().format("YYYY");

// function to generate markdown for README
function generateMarkdown(answers) {
  let licenseText;

  if (answers.license == "N/A") {
    licenseText = `This project does NOT have a license.`;
  } else if (answers.license == "MIT") {
    licenseText = `${answers.license}
    Copyright (c) ${year} ${answers.username}
    ${licenseList[answers.license]}`;
  } else {
    licenseText = `${answers.license};
    ${licenseList[answers.license]}`;
  }

  return `
# ${answers.title}
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
  If you have additional questions, send me a message at ${answers.email}.
  View more of my projects on my Github profile: ${answers.username}: 
`;
}

module.exports = generateMarkdown;

//   ## ${answers.tableOfContent}
