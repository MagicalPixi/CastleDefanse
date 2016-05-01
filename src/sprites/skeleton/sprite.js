var pixiLib = require('pixi-lib');

var args = [{

  textures:pixiLib.getTextures('skeleton'),

  

    

    "spriteName" :  "skeleton" ,

    

  

    

    "scale.x" :  0.2 ,

    

  

    

    "scale.y" :  0.2 ,

    

  

    

    "animationSpeed" :  0.1 ,

    

  

    

  
}]



  args.push([

    

      4,

    

      10,

    

      15,

    
  ]);



module.exports = function spriteFn(){
  var mySprite = pixiLib.getSp.apply(pixiLib,args);

  return mySprite;
}