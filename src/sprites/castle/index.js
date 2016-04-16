var mySpriteFn = require('./sprite.js');

function prototypeWrapper(obj){

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

  castle.anchor.x = 0.5;
  castle.anchor.y = 0.5;

  castle = positionSet(castle,arg.position);

  return castle;
};