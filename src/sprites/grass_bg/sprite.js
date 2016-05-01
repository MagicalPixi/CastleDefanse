var pixiLib = require('pixi-lib');

var args = [{
  textures:pixiLib.getTextures('grass_bg'),
    "spriteName" :  "grass_bg" ,
}]
  args.push([
  ]);



module.exports = function spriteFn(){
  var mySprite = pixiLib.getIm.apply(pixiLib,args);

  return mySprite;
}
