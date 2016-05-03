var pixiLib = require('pixi-lib')

var params = {
  textures: pixiLib.getTextures('card'),
  spriteName: 'card',
  'anchor.x': 0.5,
  'anchor.y': 0.5
}

module.exports = function spriteFn(config) {
  config = config || {}
  var newParams = Object.assign(config, params)
  var mySprite = pixiLib.getIm(newParams)
  return mySprite
}
