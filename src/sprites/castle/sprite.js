var pixiLib = require('pixi-lib');

var args = [{
  textures :pixiLib.getTextures('castle'),
  spriteName :  "castle" ,
  animationSpeed :  0.1 ,
  "scale.x":1.6,
  "scale.y":1.6,
}]
module.exports = function spriteFn(){
  var mySprite = pixiLib.getMc.apply(pixiLib,args);
  return mySprite;
}
