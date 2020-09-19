
const inquirer = require("inquirer");
const axios = require("axios");
const fs = require('fs');
const api = require('./utils/api.js')
const generateMarkdown = require('./utils/generateMarkdown.js')

async function main(){
    console.log(`starting`);
    const userResponse = await inquirer
    .prompt([
        {
            type: "input",
            message: "What is your GitHub user name?",
            name: "username",
            validate: function (answer) {
                if (answer.length < 1) {
                    return console.log("Please enter Github username (Note: You do not have to add '@'.");
                }
                return true;
            }
        },
        {
            type: "input",
            message: "What is your Project Title?",
            name: "title",
            validate: function (answer) {
                if (answer.length < 1) {
                    return console.log("Please enter A Project Title.");
                }
                return true;
            }
        },
        {
            type: "input",
            message: "Provide detail description",
            name: "desc",
            validate: function (answer) {
                if (answer.length < 1) {
                    return console.log("Enter A Detail Description");
                }
                return true;
            }
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
        }
]);

fs.writeFile('README.md', 'Good ReadMe Generator', function (err) {
    if (err) throw err;
    console.log('File is created successfully.');
  });


}
main()