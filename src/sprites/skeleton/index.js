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
    this.y += this.moveSpeed/10;
  };

  obj.attack = function (attackedObj) {
    attackedObj.injure(this.atk);
  };

  return obj;
}


module.exports = function(arg){

  var mySprite = mySpriteFn();

  mySprite.x = getStartX(arg.position);
  mySprite.y = 0;

  //攻击力
  mySprite.atk = 10;

  mySprite.moveSpeed = 2;


  mySprite = prototypeWrapper(mySprite);

  mySprite.playAction0(true);

  return mySprite;
};