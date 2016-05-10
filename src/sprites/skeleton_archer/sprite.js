var pixiLib = require('pixi-lib');

var args = [{

  textures:pixiLib.getTextures('skeleton_archer'),

  

    

    "animationSpeed" :  0.1 ,

    

  

    

    "spriteName" :  "skeleton_archer" ,

    

  

    

    "scale.x" :  0.2 ,

    

  

    

    "scale.y" :  0.2 ,

    

  
}]



  args.push([

    

      4,

    

      9,

    

      14,

    
  ]);



module.exports = function spriteFn(){
  var mySprite = pixiLib.getSp.apply(pixiLib,args);

  return mySprite;
}