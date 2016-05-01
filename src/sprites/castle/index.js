var mySpriteFn = require('./sprite.js');

function prototypeWrapper(obj){
  obj.injure = function (loseHp) {
    this.currentHp -= loseHp;

    if(this.currentHp < 0) {

      this.dead();

      return true;
    }else{
      var frame = parseInt((this.hp - this.currentHp)/this.changeHp);
      this.gotoAndStop(frame);
    }
  };
  obj.dead = function () {
    this.deathState = true;
    if(this.parent){
      this.parent.setChildIndex(this,1);
      this.gotoAndStop(this.deathFrame);

      this.parent.removeChild(this);
    }
  };
  return obj;
}

function positionSet(obj,p){
  var positionMap = {
    '1L':[160,160],
    '1R':[490,160],
    '2L':[160,410],
    '2R':[490,410],
  };

  var position = positionMap[p];

  obj.x = position[0];
  obj.y = position[1];

  return obj;
}

module.exports = function (arg) {
  var castle = mySpriteFn();
  castle = prototypeWrapper(castle);

  castle.anchor.x = 0.5;
  castle.anchor.y = 0.5;

  castle.hp = 99;
  castle.currentHp = 99;
  //每损失这个hp，就发生形状变化
  castle.changeHp = 20;
  //死亡时候的所在的状态帧数
  castle.deathState = false;
  castle.deathFrame = 4;
  castle = positionSet(castle,arg.position);
  return castle;
};
