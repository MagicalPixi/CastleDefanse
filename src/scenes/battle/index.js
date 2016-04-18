var loader = require('../../loader.js')
var params = require('./params.js');

function addSkeleton(stage, skeletonFn, cb) {
  if (cb()) {
    var skeleton = skeletonFn({
      position: Math.random() > 0 ? 'left' : 'right'
    });
    stage.addChildAt(skeleton, 1);
    //setTimeout(addSkeleton.bind(null,stage,skeletonFn,cb),10000);
  }
}


function detectCastleSkeleton(castle,skeleton) {
  return castle.y - skeleton.y < 120;
}

module.exports = function (render) {
  loader.add(params.resource.json, 'json').add(params.resource.png, 'png').load(function () {

    var grassBg = require('../../sprites/grass_bg');
    var castleFn = require('../../sprites/castle');

    var castle1L = castleFn({
      position: '1L'
    });
    var castle1R = castleFn({
      position: '1R'
    });
    var castle2L = castleFn({
      position: '2L'
    });
    var castle2R = castleFn({
      position: '2R'
    });

    var castleArr = [castle1L, castle1R, castle2L, castle2R];
    var skeletonFn = require('../../sprites/skeleton');
    var stage = new PIXI.Container();

    stage.render = function () {

      skeletonFn.skeletons.map(function (skeleton) {
        if(skeleton.moveState){
          castleArr.map(function (castle) {
            if(detectCastleSkeleton(castle,skeleton)){
              console.log('卧槽')
              skeleton.moveStop();
              skeleton.playAction1(true);
            }
          })
        }
      });
    };

    stage.addChild(grassBg);

    castleArr.forEach(function (castle) {

      stage.addChild(castle);
    });

    addSkeleton(stage, skeletonFn, function () {


      return true;
    });


    render(stage);
  })
}
