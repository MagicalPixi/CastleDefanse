/**
 * Created by zyg on 16/5/11.
 */
module.exports = {

  getStartX: function getStartX(p) {
    var r = Math.random();
    var startX = {
      left: 110 + r * 50 - 25,
      right: 430 + r * 50 - 25
    };

    if (startX[p]) {
      return startX[p];
    } else {
      throw new ERROR('getStartX');
    }
  },

  prototypeWrapper: function prototypeWrapper(obj,arg) {

    obj.render = function () {
      if (this.moveState) {
        this.y += this.moveSpeed / 10;
      }
      if (this.atkState && this.renderCount % 60 === 0) {
        this.attack();
      }
      if (this.y > 1004 && this.parent) {
        this.parent.removeChild(this);
      }
    };

    obj.move = function () {
      this.moveState = true;
      this.playAction0(true);
    };
    obj.moveStop = function () {
      this.moveState = false;
    };

    obj.detectCastle = function (castle) {
      return castle.y - this.y < 120 && Math.abs(castle.x - this.x) < 100 && !castle.deathState
    };

    obj.setAttackTarget = function (target) {
      this.attackTarget = target;

      this.moveStop();
      this.attack();
    };

    obj.attack = function () {
      this.atkState = true;
      var isDead = this.attackTarget.injure(this.atk);

      if (isDead) {
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
}