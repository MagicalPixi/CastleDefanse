var loader = require('../../loader.js')
var params = require('./params.js');

function addSkeleton(stage, skeletonFn, cb) {
  if (cb()) {
    var skeleton = skeletonFn({
      position: Math.random() > 0.5 ? 'left' : 'right'
    });
    stage.addChildAt(skeleton, 1);
    setTimeout(addSkeleton.bind(null,stage,skeletonFn,cb),2000);
  }
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
    var skeletonArcherFn = require('../../sprites/skeleton_archer');

    var cardFactory = require('../../sprites/card').getSprite
    var cardKeys = require('../../sprites/card').keys

    var stage = new PIXI.Container();

    stage.render = function () {

      skeletonFn.skeletons.map(function (skeleton) {
        if(skeleton.moveState){

          castleArr  = castleArr.filter(function (castle,i) {
            return !castle.deathState;
          }).map(function (castle) {

            if(skeleton.detectCastle(castle,skeleton)){
              skeleton.setAttackTarget(castle);
              skeleton.playAction1(true);
            }
            return castle;
          });
        }
      });

      skeletonArcherFn.skeletons.map(function (skeleton) {
        if(skeleton.moveState){

          castleArr  = castleArr.filter(function (castle,i) {
            return !castle.deathState;
          }).map(function (castle) {

            if(skeleton.detectCastle(castle,skeleton)){
              skeleton.setAttackTarget(castle);
              skeleton.playAction0(true);
            }
            return castle;
          });
        }
      });
    };

    stage.addChild(grassBg);
    var firstCard= cardFactory(cardKeys.first)
    var secondCard = cardFactory(cardKeys.second)
    var thirdCard = cardFactory(cardKeys.third)
    var forthCard = cardFactory(cardKeys.forth)
    var prepareCard = cardFactory(cardKeys.prepare)
    stage.addChild(firstCard)
    stage.addChild(secondCard)
    stage.addChild(thirdCard)
    stage.addChild(forthCard)
    stage.addChild(prepareCard)
    castleArr.forEach(function (castle) {

      stage.addChild(castle);
    });


    addSkeleton(stage, function (args) {
      return skeletonArcherFn(args);
    }, function () {
      return skeletonArcherFn.skeletons.length <4;
    });

    addSkeleton(stage, function (args) {
      return skeletonFn(args);
    }, function () {
      return skeletonFn.skeletons.length <4;
    });


    render(stage);
  })
}
