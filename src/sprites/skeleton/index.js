var mySpriteFn = require('./sprite.js');

function getStartX(p){
  var startX = {
    left:110,
    right:430
  };

  if(startX[p]) {
    return startX[p];
  }else{
    throw new ERROR('getStartX');
  }
}


function prototypeWrapper(obj){

  obj.render = function () {
    if(this.moveState){
      this.y += this.moveSpeed/10;
    }
  };

  obj.move = function () {
    this.moveState = true;
  };
  obj.moveStop = function () {
    this.moveState = false;
  };

  obj.attack = function (attackedObj) {
    attackedObj.injure(this.atk);
  };

  obj.dead = function () {

  };

  return obj;
}


module.exports = function skeletonFn(arg){

  var mySprite = mySpriteFn();

  mySprite.x = getStartX(arg.position);
  mySprite.y = 0;

  //攻击力
  mySprite.atk = 10;

  mySprite.moveSpeed = 5;
  mySprite.moveState = true;

  mySprite = prototypeWrapper(mySprite);

  mySprite.playAction0(true);


  skeletonFn.skeletons = (skeletonFn.skeletons || []).concat(mySprite);

  return mySprite;
};