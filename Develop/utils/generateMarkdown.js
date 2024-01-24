// function that returns a license badge based on which license is passed in
// If there is no license, it returns an empty string
function renderLicenseBadge(license) {
  if (license !== 'N/A') {
    return `[${license}](https://img.shields.io/badge/License-${license}-yellow.svg)`;
}
return '';
}
// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  if (license !== 'N/A') {
    return `\n * [License](#license)\n`
  }
  return '';
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  if (license !== 'N/A') {
    return `## License\nThis project is licensed under the [${license}](https://img.shields.io/badge/License-${license}-yellow.svg)`
  }
  return '';

}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}
${renderLicenseBadge(data.license)}
  ## Table of contents
  * [Description](#Description)
  * [Installation](#Installatiton)
  * [Usage](#Usage)
  * [License](#License)
  * [Contributing](#Contributing)
  * [Tests](#Tests)
  * [Questions](#Questions)
  ${renderLicenseLink(data.license)}
  # Description
  ${data.description}
  ## Installation
  ${data.installation}
  ## Usage
  ${data.usage}
  ## License
  ${data.license}
  ## Contributing
  ${data.contributing}
  ## Tests
  ${data.tests}
  ${renderLicenseSection(data.license)}
  ## Questions
  * Github profile: ${data.github}
  * Email Address: ${data.email}
`;
}

module.exports = generateMarkdown;
