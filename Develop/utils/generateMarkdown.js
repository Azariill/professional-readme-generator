// TODO: Create a function that returns a license badge based on which license is passed in
function renderLicenseBadge(license) {
  // If there is no license, return an empty string
    if(license === 'none'){
      return '';
    }
    // assigns an empty var currentLicense
    let currentLicense;
    // takes the license and compares which one it is to return proper badge
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
  // return the badge string
  return currentLicense;
  
}

// TODO: Create a function that returns the license link
function renderLicenseLink(license) {
  // If there is no license, return an empty string
  if(license ==='none'){
    return '';
  }
  // returns license tag to TOC section
  else return "[License](#license)<br>";
}
                          
// TODO: Create a function that returns the license section of README
function renderLicenseSection(license) {
  // creates and empty variable for license section
  let licenseSection;
  // If there is no license, return an empty string
    if(license === 'none'){
      return licenseSection = '';
    }
  // takes current license and sets string for license section 
    switch(license){
     case 'MIT':
        licenseSection = `This application is covered under [![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)`;
       break;
     case 'GPLv2':
        licenseSection = `This application is covered under [![License: GPL v2](https://img.shields.io/badge/License-GPL_v2-blue.svg)](https://www.gnu.org/licenses/old-licenses/gpl-2.0.en.html)`;
       break;
     case 'Apache':
        licenseSection =`This application is covered under [![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)`;
       break;
     case 'BSD3-clause':
        licenseSection = `This application is covered under [![License](https://img.shields.io/badge/License-BSD_3--Clause-blue.svg)](https://opensource.org/licenses/BSD-3-Clause)`;
       break;
       case 'BSD 2-clause':
        licenseSection = `This application is covered under [![License](https://img.shields.io/badge/License-BSD_2--Clause-orange.svg)](https://opensource.org/licenses/BSD-2-Clause)`;
       break;
     case 'LGPLv3':
        licenseSection =`This application is covered under [![License: LGPL v3](https://img.shields.io/badge/License-LGPL_v3-blue.svg)](https://www.gnu.org/licenses/lgpl-3.0) `;
        break;
     case 'AGPLv3':
        licenseSection= `This application is covered under [![License: AGPL v3](https://img.shields.io/badge/License-AGPL_v3-blue.svg)](https://www.gnu.org/licenses/agpl-3.0) `;
       break;
   }
   // returns license section
   return `
   ## License
   ${licenseSection}
   
   `;

}

// maps out the installation steps
const generateInstallation = installation =>{
  
  return`
     ${installation
        .map(({installationStep}) => `\r* ${installationStep}<br>`)
        .join('')}
  `
}


// TODO: Create a function to generate markdown for README
const generateMarkdown = (readMeData) => {
  // deconstructs read me data variables
  const {title, description, installation, usage, contributions, testInstruction, license, name, email, } = readMeData;
  
  // returns formatted markdown
  return `# ${title} ${renderLicenseBadge(license)}

  ## Description
  ${description} 

  ## Table of Contents
  [Installation](#installation)<br>
  [Usage](#usage)<br>
  ${renderLicenseLink(license)}
  [Contributing](#contributing)<br>
  [Tests](#tests)<br>
  [Questions](#questions)<br>

  ## Installation
  ${generateInstallation(installation)}

  \r## Usage
  ${usage}
  
  ${renderLicenseSection(license)}
  \r## Contributing
  ${contributions}
  \r## Tests
  ${testInstruction}
  \r## Questions
  \r### Have any addition questions for me? I have been found at the links down below<br>
  \r- GitHub Username : ${name} | | Profile link: https://github.com/${name}<br>
  \r- Email : ${email}
`;
}

// exports modules
module.exports = generateMarkdown;
