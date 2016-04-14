var pixiLib = require('pixi-lib');

var args = [{

  textures:pixiLib.getTextures('castle'),

  

    

    "spriteName" :  "castle" ,

    


    

    "animationSpeed" :  0.1 ,

    

  
}]



  args.push([

    
  ]);



module.exports = function spriteFn(){
  var mySprite = pixiLib.getMc.apply(pixiLib,args);

  return mySprite;
}