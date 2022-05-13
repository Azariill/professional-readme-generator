// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  console.log(`${console.log(license)} this is render badge section`)
    if(license === 'none'){
      return '';
    }
    let currentLicense;
    switch(license){
    case 'MIT':
       currentLicense =`[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)  `;
     break;
    case 'GPLv2':
       currentLicense =`[![License: GPL v2](https://img.shields.io/badge/License-GPL_v2-blue.svg)](https://www.gnu.org/licenses/old-licenses/gpl-2.0.en.html) `;
     break;
    case 'Apache':
       currentLicense = `[![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)](https://opensource.org/licenses/Apache-2.0) `;
     break;
    case 'BSD3-clause':
       currentLicense = `[![License](https://img.shields.io/badge/License-BSD_3--Clause-blue.svg)](https://opensource.org/licenses/BSD-3-Clause)`;
     break;
    case 'BSD 2-clause':
       currentLicense = `[![License](https://img.shields.io/badge/License-BSD_2--Clause-orange.svg)](https://opensource.org/licenses/BSD-2-Clause)`;
     break;
    case 'LGPLv3':
       currentLicense = `[![License: LGPL v3](https://img.shields.io/badge/License-LGPL_v3-blue.svg)](https://www.gnu.org/licenses/lgpl-3.0) `;
     break;
    case 'AGPLv3':
       currentLicense = `[![License: AGPL v3](https://img.shields.io/badge/License-AGPL_v3-blue.svg)](https://www.gnu.org/licenses/agpl-3.0)`;
     break;
  }

  return currentLicense;
  
}

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
  let licenseSection;
    if(license === 'none'){
      return licenseSection = '';
    }
    
    switch(license){
     case 'MIT':
        licenseSection = `This application is covered under [![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)`;
       break;
     case 'GPLv2':
        licenseSection = `This application is covered under [![License: GPL v2](https://img.shields.io/badge/License-GPL_v2-blue.svg)](https://www.gnu.org/licenses/old-licenses/gpl-2.0.en.html)`;
       break;
    //  case 'Apache':
    //     `This application is covered under [![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)  `
    //    break;
    //  case 'BSD3-clause':
    //     `This application is covered under [![License](https://img.shields.io/badge/License-BSD_3--Clause-blue.svg)](https://opensource.org/licenses/BSD-3-Clause)  `
    //    break;
    //    case 'BSD 2-clause':
    //     `This application is covered under [![License](https://img.shields.io/badge/License-BSD_2--Clause-orange.svg)](https://opensource.org/licenses/BSD-2-Clause)  `
    //    break;
    //  case 'LGPLv3':
    //     `This application is covered under [![License: LGPL v3](https://img.shields.io/badge/License-LGPL_v3-blue.svg)](https://www.gnu.org/licenses/lgpl-3.0) `
    //    break;
    //  case 'AGPLv3':
    //     `This application is covered under [![License: AGPL v3](https://img.shields.io/badge/License-AGPL_v3-blue.svg)](https://www.gnu.org/licenses/agpl-3.0) `
    //    break;
   }
    
   return licenseSection;

}

const generateInstallation = installation =>{
  
  return`
     ${installation
        .map(({installationStep}) => `* ${installationStep}\n\t\t`)
        .join('')}
  `
}


// TODO: Create a function to generate markdown for README
const generateMarkdown = (readMeData) => {
  
  const {title, description, installation, usage, contributions, testInstruction, license } = readMeData;
  console.log(license);
  
  return `# ${title}

  ## Description
    -${description} ${renderLicenseBadge(license)}

  ## Table of Contents

    - [Installation](## Installation)
    - [Usage](## Usage)
    - ${renderLicenseLink(license)}
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
