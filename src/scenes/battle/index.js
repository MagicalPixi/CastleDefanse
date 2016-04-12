var loader = require('../../loader.js')
var params = require('./params.js')
module.exports = function(render) {
  loader.add(params.resource.json, 'json').add(params.resouce.png, 'png').load(function() {
    
  })
}
