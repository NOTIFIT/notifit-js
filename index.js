var main = {}


main.config = require('./config')

main.user = {
  accessToken: '',
  authorization: '',
  loggedIn: false
}

// Public methods

// Private methods
main.getDeviceName = require('./methods/getDeviceName')
main.getSystemName = require('./methods/getSystemName')
main.getSystemVersion = require('./methods/getSystemVersion')
main.getDeviceModel = require('./methods/getDeviceModel')
main.getDeviceLocalizedModel = require('./methods/getDeviceLocalizedModel')
main.getDeviceIdentifierForVendor = require('./methods/getDeviceIdentifierForVendor')
main.getDeviceTimezone = require('./methods/getDeviceTimezone')
main.getDevicePreferedLanguage = require('./methods/getDevicePreferedLanguage')
main.getDeviceDifferenceToGMT = require('./methods/getDeviceDifferenceToGMT')


module.exports = main
