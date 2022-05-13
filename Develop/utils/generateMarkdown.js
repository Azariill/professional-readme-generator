// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  if(license ==='none'){
    return '';
  }
  else return "[License](## License)";
}
                          
// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
    if(license === 'none'){
      return '';
    }
    else switch(license)
    

}

const generateInstallation = installation =>{
  
  return`
     ${installation
        .map(({installationStep}) => `* ${installationStep}\n\t\t\t`)
        .join('')}
  `
}


// TODO: Create a function to generate markdown for README
const generateMarkdown = (readMeData) => {
  
  const {title, description, installation, usage, contributions, testInstruction, license } = readMeData;
  
  return `# ${title}

  ## Description
    -${description}

  ## Table of Contents

    - [Installation](##Installation)
    - [Usage](## Usage)
    - ${renderLicenseLink}
    - [Contributing](## Contributing)
    - [Tests](## Tests)
    - [Questions](## Questions)

  ## Installation
    ${generateInstallation(installation)}

  ## Usage
    -${usage}
    -${renderLicenseSection(license)}
  ## Contributing
    -${contributions}
  ## Tests
    -${testInstruction}
  ## Questions
`;
}

module.exports = generateMarkdown;
