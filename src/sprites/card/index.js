var spriteFactory = require('./sprite.js')
var params = require('./params.js').params
var keys = require('./params.js').keys
var getSprite = function(key) {
  key = key || keys.first
  var mySprite = spriteFactory(params[key])
  mySprite.render = function () {}
  return mySprite
}

module.exports = {
  getSprite: getSprite,
  keys: keys
}
