// function to generate markdown for README
function generateMarkdown(data) {
  let licenseType;
  if (data.license == "N/A") {
    licenseType = `This project does NOT have a license.`;
  } else {
    licenseType = `This project is licensed under the terms of the ${data.license} license.`;
  }

  return `# ${data.title}
    ## Description
      ${data.description}
    ## Installation
      ${data.installation}
    ## Usage
      ${data.usage}
    ## License
      ${licenseType}
    ## Contributing
      ${data.contributing}
    ## Tests
      ${data.tests}
    ## Questions
      If you have additional questions, send me a message at ${data.email}.
      View more of my projects on my Github profile: ${data.username}: 
`;
}

module.exports = generateMarkdown;

//   ## ${data.tableOfContent}
