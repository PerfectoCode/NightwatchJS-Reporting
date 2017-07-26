var env = require('getenv');
const user = 'My_User',
  password = 'My_Password',
  host = 'My_Host.perfectomobile.com';

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
        "default_path_prefix": "/nexperience/perfectomobile/wd/hub",
        "selenium_port": 443,
        "selenium_host": host,
        "end_session_on_fail": false,

        "desiredCapabilities": {
          "browserName": "mobileOS",
          "platformName": "Android",
          "user": user,
          "password": password
        }

      }
    }
  }
})();