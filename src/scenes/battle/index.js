var loader = require('../../loader.js')
var params = require('./params.js');

module.exports = function(render) {
  loader.add(params.resource.json, 'json').add(params.resource.png, 'png').load(function() {

    var grassBg = require('../../sprites/grass_bg');
    var castleArr = require('../../sprites/castle');

    var stage = new PIXI.Container();


    stage.addChild(grassBg);

    castleArr.forEach(function(castle){
      console.log(castle.x,castle.y);

      stage.addChild(castle);
    });


    render(stage);
  })
}
