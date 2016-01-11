console.log('Running test')

var sdk = require('./index.js')

sdk.getDeviceName()
sdk.getSystemName()
sdk.getSystemVersion()
sdk.getDeviceModel()
sdk.getDeviceLocalizedModel()
sdk.getDeviceIdentifierForVendor()
sdk.getDeviceTimezone()
sdk.getDevicePreferedLanguage()
sdk.getDeviceDifferenceToGMT()

/*console.log('\nTest: register user')
sdk.register(user.username, user.firstname, user.lastname, user.email, user.password).then(function(result){
  console.log('Success: user created')
  console.log('User: ' + user.username + ' : ' + user.password)


  console.log('\nTest: login user')
  return
}).catch(function(err){
  console.error('Error: something went wrong')
  console.error(err)
})*/
