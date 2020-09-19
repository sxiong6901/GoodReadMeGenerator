function generateMarkdown(answer) {
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
Copyright (c) [year] [fullname]
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

`;
}

module.exports = generateMarkdown;

