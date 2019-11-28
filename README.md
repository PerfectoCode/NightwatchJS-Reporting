## NightwatchJS-Reporting

A sample demonstrate how to implement Perfecto DigitalZoom Reporting SDK within your Nightwatch.js tests.

### Quick Start:
- Clone the project: `git clone https://github.com/PerfectoCode/NightwatchJS-Reporting.git`
- Install dependencies using `npm install` command
- Fill your Perfecto lab security token and host within [nightwatch.conf.js](nightwatch.conf.js) file: 
```JavaScript
const securityToken = 'My_SecurityToken',
  host = 'My_Host.perfectomobile.com';
```
- Run the tests with: `./node_modules/.bin/nightwatch`

For the complete Perfecto DigitalZoom Reporting NodeJS implementation and documentation see: http://developers.perfectomobile.com/display/PD/JavaScript 
