// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if (license === "MIT") {
    return '[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)'
  }
  else if (license === "GNU")
    return '![gpl](https://img.shields.io/badge/license-GPL%203.0-green)';
  else {
    return "";
  }
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  if (license === "MIT") {
    return 'https://choosealicense.com/licenses/mit/'
  }
  else if (license === "GNU")
  return 'https://choosealicense.com/licenses/agpl-3.0/'
  else {
    return ""
  }
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  if (license === "MIT") {
    return `A short and simple permissive license with conditions only requiring preservation of copyright and license notices. Licensed works, modifications, and larger works may be distributed under different terms and without source code.`
  }
  else if (license === "GNU") {
    return `Permissions of this strongest copyleft license are conditioned on making available complete source code of licensed works and modifications, which include larger works using a licensed work, under the same license. Copyright and license notices must be preserved. Contributors provide an express grant of patent rights. When a modified version is used to provide a service over a network, the complete source code of the modified version must be made available.`
  }
  else {
    return ""
  }
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}

  ${renderLicenseBadge(data.license)}

  ## Table of Contents
1. [Description](#Description)
2. [Installation](#Installation)
3. [Usage](#Usage)
4. [Contributing Guidelines](#Contributing-Guidelines)
5. [Test Instructions](#Test-Instructions)
6. [License](#License)
7. [Questions](#Questions)
## Description
- ${data.description}
## Installation
- ${data.installInstructions}
## Usage
- ${data.usage}
## Contributing Guidelines
- ${data.contributors}
## Test Instructions
- ${data.testInstruct}
## License
- ${data.license} License
- ${renderLicenseLink(data.license)}
- ${renderLicenseSection(data.license)}
## Questions
- GitHub Profile: <a href="https://github.com/${data.GitHub}">GitHub</a><br>
- My Email: ${data.email}<br>
`;
}

module.exports = generateMarkdown;
