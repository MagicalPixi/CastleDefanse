var mySpriteFn = require('./sprite.js');

var castle1L = mySpriteFn();
var castle1R = mySpriteFn();
var castle2L = mySpriteFn();
var castle2R = mySpriteFn();

castle1L.x = 100;
castle1L.y = 100;

castle1R.x = 410;
castle1R.y = 100;

castle2L.x = 100;
castle2L.y = 350;

castle2R.x = 410;
castle2R.y = 350;

module.exports = [castle1L,castle1R,castle2L,castle2R];