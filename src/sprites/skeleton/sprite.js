var pixiLib = require('pixi-lib');

var args = [{

  textures:pixiLib.getTextures('skeleton'),

  

    

    "spriteName" :  "skeleton" ,

    

  

    

    "animationSpeed" :  0.1 ,

    

  

    

    "loop" :  1 ,

    

  

    

    "playAction0" :  1 ,

    

  
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