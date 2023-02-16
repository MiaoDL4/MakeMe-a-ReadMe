// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(licence) {
  if (licence === 'Apache Licence 2.0') {
    return '![licence](https://img.shields.io/badge/Licence-apache--2--0-blue)'
  } else if (licence === 'GNU General Public licence V3') {
    return '![licence](https://img.shields.io/badge/Licence-lgpl--3--0-blue)'
  } else if (licence === 'MIT Licence') {
    return '![licence](https://img.shields.io/badge/Licence-apache--2--0-blue)'
  } else {
    return ''
  }
}``

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(licence) {
  if (licence === 'Apache Licence 2.0') {
    return 'https://opensource.org/license/apache-2-0/'
  } else if (licence === 'GNU General Public licence V3') {
    return 'https://opensource.org/license/lgpl-3-0/'
  } else if (licence === 'MIT Licence') {
    return 'https://opensource.org/license/mit-0/'
  } else {
    return ''
  }
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
//function renderLicenseSection(license) {}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}
${renderLicenseBadge(data.licence[0])}

## Description
${data.description}

## Table of Contents (Optional)

- [Installation](#installation)
- [Usage](#usage)
- [License](#license)
- [Credits](#credits)
- [Tests](#tests)
- [Questions](#Questions)

## Installation
${data.installation}

## Usage
${data.usage}

## licence
${data.licence}

## Credits
${data.contributing}

## Tests
${data.tests}

## Questions for ${data.github}
if you have any question in regards to this project please email me at ${data.email} or find me at https://github.com/${data.github}
`;
}

module.exports = generateMarkdown;
