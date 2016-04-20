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
    if(this.atkState && this.renderCount%60 === 0){
      this.attack();
    }
  };

  obj.move = function () {
    this.moveState = true;
    this.playAction0(true);
  };
  obj.moveStop = function () {
    this.moveState = false;
  };

  obj.setAttackTarget = function (target) {
    this.attackTarget = target;

    this.moveStop();
    this.attack();
  };

  obj.attack = function () {
    this.atkState = true;
    var isDead = this.attackTarget.injure(this.atk);

    if(isDead){
      this.move();
      this.attackStop();
    }
  };
  obj.attackStop = function () {
    this.atkState = false;
    this.attackTarget = null;
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
  mySprite.atk = 17;
  mySprite.atkState = false;

  mySprite.moveSpeed = 5;
  mySprite.moveState = true;

  mySprite = prototypeWrapper(mySprite);

  mySprite.playAction0(true);


  skeletonFn.skeletons = (skeletonFn.skeletons || []).concat(mySprite);

  return mySprite;
};