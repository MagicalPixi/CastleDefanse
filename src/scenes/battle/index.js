var loader = require('../../loader.js')
var params = require('./params.js');

module.exports = function(render) {
  loader.add(params.resource.json, 'json').add(params.resource.png, 'png').load(function() {

    var grassBg = require('../../sprites/grass_bg');

    var stage = new PIXI.Container();

    stage.addChild(grassBg);

    render(stage);
  })
}
