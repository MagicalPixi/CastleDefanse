var loader = require('../../loader.js')
var params = require('./params')
module.exports = function(render) {
  loader.add(params.resource.json, 'json').add(params.resource.png, 'png').load(function() {
  
  })
}
