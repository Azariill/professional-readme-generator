// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
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
  else return "[License](#license)<br>";
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
    
   return `
   ## License
   ${licenseSection}
   
   `;

}

const generateInstallation = installation =>{
  
  return`
     ${installation
        .map(({installationStep}) => `\r*${installationStep}<br>`)
        .join('')}
  `
}


// TODO: Create a function to generate markdown for README
const generateMarkdown = (readMeData) => {
  
  const {title, description, installation, usage, contributions, testInstruction, license, name, email, } = readMeData;
  
  console.log(license);
  
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

  ## Usage
  ${usage}
  
  ${renderLicenseSection(license)}
  ## Contributing
  ${contributions}
  ## Tests
  ${testInstruction}
  ## Questions
  ### Have any addition questions for me? I have been found at the links down below<br>
  - GitHub Username : ${name} | | Profile link: https://github.com/${name}<br>
  - Email : ${email}
`;
}

module.exports = generateMarkdown;
