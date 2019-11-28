var env = require('getenv');
const securityToken = 'My_SecurityToken',
    host = 'MY_Host.perfectomobile.com';


module.exports = (function () {
  return {
    "src_folders": ["tests"],
    "custom_commands_path": "",
    "custom_assertions_path": "",
    "globals_path": "",

    "selenium": {
      "start_process": false
    },

    "test_settings": {

      "default": {
        "use_ssl": true,
        "default_path_prefix": "/nexperience/perfectomobile/wd/hub/fast",
        "selenium_port": 443,
        "selenium_host": host,
        "end_session_on_fail": false,

        "desiredCapabilities": {
          "browserName": "mobileOS",
          "platformName": "Android",
          "securityToken": securityToken
        }

      }
    }
  }
})();
