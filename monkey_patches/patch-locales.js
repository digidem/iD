var fs = require('fs-extra')
var YAML = require('js-yaml')
var merge = require('lodash/merge')
var path = require('path')

var dstPath = path.join(__dirname, '..', 'dist', 'locales')
var localeDir = path.join(__dirname, 'locales')
fs.readdirSync(localeDir).forEach(function (filename) {
  var patch = JSON.parse(fs.readFileSync(path.join(localeDir, filename)).toString())
  var idLocale = path.join(dstPath, filename)
  var original = JSON.parse(fs.readFileSync(idLocale).toString())

  var newLocale = merge(original, patch)
  fs.writeFileSync(idLocale, JSON.stringify(newLocale, null, 2))
  if (filename === 'en.json') {
    var coreYAML = path.join(__dirname, '..', 'data', 'core.yaml')
    fs.writeFileSync(coreYAML, YAML.safeDump(newLocale))
    const enGB = {
      'en-GB': newLocale.en
    }
    const enAU = {
      'en-AU': newLocale.en
    }
    fs.writeFileSync(path.join(dstPath, 'en-GB.json'), JSON.stringify(enGB, null, 4))
    fs.writeFileSync(path.join(dstPath, 'en-AU.json'), JSON.stringify(enAU, null, 4))
  }
})
