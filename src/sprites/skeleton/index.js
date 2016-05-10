var mySpriteFn = require('./sprite.js');
var spriteUtils = require('../utils');

function skeletonFn(arg){

  var mySprite = mySpriteFn();

  mySprite.x = spriteUtils.getStartX(arg.position);
  mySprite.y = 0;

  //攻击力
  mySprite.atk = 1;
  mySprite.atkState = false;

  mySprite.moveSpeed = 5;
  mySprite.moveState = true;

  mySprite = spriteUtils.prototypeWrapper(mySprite);

  mySprite.playAction0(true);

  skeletonFn.skeletons = (skeletonFn.skeletons).concat(mySprite);

  return mySprite;
}

skeletonFn.skeletons = [];

module.exports = skeletonFn;