var loader = require('../../loader.js')
var params = require('./params.js');


function addSkeleton(stage,skeletonFn,cb){

  if(cb()){
    stage.addChildAt(skeletonFn({
      position:Math.random() > 0 ? 'left':'right'
    }),1);
    setTimeout(addSkeleton.bind(null,stage,skeletonFn,cb),10000);
  }
}

module.exports = function(render) {
  loader.add(params.resource.json, 'json').add(params.resource.png, 'png').load(function() {

    var grassBg = require('../../sprites/grass_bg');
    var castleFn = require('../../sprites/castle');

    var castle1L = castleFn({
      position:'1L'
    });
    var castle1R = castleFn({
      position:'1R'
    });
    var castle2L = castleFn({
      position:'2L'
    });
    var castle2R = castleFn({
      position:'2R'
    });

    var skeletonFn = require('../../sprites/skeleton');

    var stage = new PIXI.Container();
    stage.addChild(grassBg);

    [castle1L,castle1R,castle2L,castle2R].forEach(function(castle){

      stage.addChild(castle);
    });

    addSkeleton(stage,skeletonFn, function () {
      return true;
    });


    render(stage);
  })
}
