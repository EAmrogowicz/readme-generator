# Module 11 Challenge: Professional README Generator

## Overview

A command-line application that dynamically generates a professional README.md
file from a user's input using the
[Inquirer package](https://www.npmjs.com/package/inquirer). Program allows the
project creator to devote more time to working on the project.

The application will be invoked by using the following command:

```
node index.js
```

## Table of Contents

- [Installation](#installation)
- [Usage](#usage)
- [Requirements](#requirements)
- [Credits](#credits)
- [License](#license)

## Installation

Install Inquirer package using following instruction in your terminal:

```
npm install --save inquirer
```

Make sure you import the package to your .js file with the command:

```
import inquirer from 'inquirer';
```

## Usage

A walk-through video:
https://drive.google.com/file/d/15t1H2Wd6E6oVATdp0DHxpzydhdcU2CCY/view

GitHub source files: https://github.com/EAmrogowicz/readme-generator

## Requirements

A command-line application that accepts user input.

When a user is prompted for information about the application repository then a
high-quality, professional README.md is generated with:

- The title of my project
- Sections entitled:
  - Description
  - Table of Contents
  - Installation
  - Usage
  - License
  - Contributing
  - Tests
  - Questions
- When a user enters the project title then it is displayed as the title of the
  README
- When a user enters a description, installation instructions, usage
  information, contribution guidelines, and test instructions then this
  information is added to the sections of the README entitled Description,
  Installation, Usage, Contributing, and Tests
- When a user chooses a license for their application from a list of options
  then a badge for that license is added near the top of the README and a notice
  is added to the section of the README entitled **License** that explains which
  license the application is covered under
- When a user enters their GitHub username then this is added to the section of
  the README entitled Questions, with a link to their GitHub profile
- When a user enters their email address then this is added to the section of
  the README entitled Questions, with instructions on how to reach them with
  additional questions
- When a user clicks on the links in the **Table of Contents** then they are
  taken to the corresponding section of the README

## Credits

N/A

## License

Please refer to the LICENSE in the repo.
