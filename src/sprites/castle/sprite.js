var pixiLib = require('pixi-lib');

var args = [{

  textures:pixiLib.getTextures('castle'),

  

    

    "spriteName" :  "castle" ,

    

  

    

    "scale.x" :  0.1 ,

    

  

    

    "scale.y" :  0.1 ,

    

  
}]



  args.push([

    
  ]);



module.exports = function spriteFn(){
  var mySprite = pixiLib.getIm.apply(pixiLib,args);

  return mySprite;
}