var mySpriteFn = require('./sprite.js');
var spriteUtils = require('../utils');

function prototypeWrapperOverride(obj){

  obj.detectCastle = function (castle) {
    return castle.y - this.y < 200 && Math.abs(castle.x - this.x) < 100 && !castle.deathState
  };
  obj.move = function () {
    this.moveState = true;
    this.playAction1(true);
  }
  
  return obj;
}

function spriteFn(arg){

  var mySprite = mySpriteFn();

  mySprite.x = spriteUtils.getStartX(arg.position);
  mySprite.y = 0;

  //攻击力
  mySprite.atk = 1;
  mySprite.atkState = false;

  mySprite.moveSpeed = 5;
  mySprite.moveState = true;

  mySprite = prototypeWrapperOverride(spriteUtils.prototypeWrapper(mySprite));

  mySprite.playAction1(true);

  spriteFn.skeletons = (spriteFn.skeletons).concat(mySprite);

  return mySprite;
}

spriteFn.skeletons = [];

module.exports = spriteFn;