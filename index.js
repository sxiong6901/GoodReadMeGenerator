const inquirer = require("inquirer");
const util = require("util");
const fs = require('fs');
const api = require('./utils/api.js')
const writeReadme = util.promisify(fs.writeFile);
async function promptUser(){
    return inquirer.prompt([
        {
            type: "input",
            name: "username",
            message: "What is your GitHub user name?"
        },
        {
            type: "input",
            name: "title",
            message: "What is your Project Title?"
        },
        {
            type: "input",
            message: "Provide detail description",
            name: "desc"
        },
        {
            type: "input",
            message: "Provide a step-by-step description of how to get the development environment running.",
            name: "install"
        },
        {
            type: "input",
            message: "Provide instructions for use.",
            name: "usage"
        },
        {
            type: 'list',
            message: "Choose a license for your project.",
            choices: ['GNU AGPLv3', 'GNU GPLv3', 'GNU LGPLv3', 'Mozilla Public License 2.0', 'Apache License 2.0', 'MIT License', 'Boost Software License 1.0', 'Unlicense'],
            name: "licenseName"
        },
        {
            type: "input",
            message: "Provide License url. ",
            name: "licenseUrl"
        },
        {
            type: "input",
            message: "Please enter the github user names of all contributors if applicable (Note: Separate name with commas and no spaces.)",
            name: "contributors"
        },
        {
            type: "input",
            message: "Provide examples on how to run tests.",
            name: "test"
        },
    ]);
    }
function generateMd(answer) {
    return `
  # Project Title : ${answer.title}
  ## Project Description:
  ${answer.desc}
  ## Table of Contents
  * [Title](#Title)
  * [Description](#Description)
  * [Table of Contents](#Table of Contents)
  * [Installation](#Installation)
  * [Usage](#Usage)
  * [License](#license)
  * [Contributors] (#Contributors)
  * [Tests](#)
  * [Questions](#)
  ## Installation
  ${answer.install}
  ## Usage
  ${answer.usage}
  ## License
  ${answer.licenseName} - URL ${answer.licenseUrl}
  ## Contributors
  ${answer.contributors}
  ## Test
  ${answer.test}
  ## Questions
  If you have any questions, contact ${answer.username} on GitHub.


  ## License
  MIT License
  Copyright (c) [2020] [Soua Xiong]
  Permission is hereby granted, free of charge, to any person obtaining a copy
  of this software and associated documentation files (the "Software"), to deal
  in the Software without restriction, including without limitation the rights
  to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
  copies of the Software, and to permit persons to whom the Software is
  furnished to do so, subject to the following conditions:
  The above copyright notice and this permission notice shall be included in all
  copies or substantial portions of the Software.
  THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
  IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
  FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
  AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
  LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
  OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
  SOFTWARE.
  ## Author 
  ![GitHub profile pic](${answer.image})
  `
  }
// fs.writeFile('README.md', generateMarkdown, function (err) {
//     if (err) throw err;
//     console.log('File is created successfully.');
//   });
promptUser()
.then(function(answer) {
    const md = generateMd(answer);
    return writeReadme("README.md", md);
  })
  .then(function() {
    console.log("Successfully wrote to README.md");
  })
  .catch(function(err) {
    console.log(err);
  });