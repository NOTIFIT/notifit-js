var osLocale = require('os-locale')

module.exports = function(){
  return osLocale.sync()
}
