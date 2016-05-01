var spriteFactory = require('./sprite.js')
var postion = {
  prepare: {
    x: 20,
    y: 850
  },
  first: {
    x: 200,
    y: 850
  },
  second: {
    x: 310,
    y: 850
  },
  third: {
    x: 420,
    y: 850
  },
  forth: {
    x: 530,
    y: 850
  }
  
}
var getSprite = function(key) {
  key = key || 'first'
  var mySprite = spriteFactory()
  mySprite.render = function () {}
  var point = postion[key]
  mySprite.x = point.x
  mySprite.y = point.y
  return mySprite
}
module.exports = getSprite
