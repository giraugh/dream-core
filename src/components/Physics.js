const Vector = require('../util/Vector.js')

/*
  Collides with other physics objects and with all passed colliders of form;
    x y w h
*/

module.exports = class Physics {
  constructor () {
    this._colliders = []
    this._velocity = new Vector(0, 0)
    this._friction = 0.1
  }

  empty (x, y, w, h) {

  }

  velocity () { return this._velocity }
  setVelocity (x, y) { this._velocity.set(x, y) }
  getVelocity () { return this._velocity.get() }
  addVelocity (dx, dy) {
    this.setVelocity(this.velocity().add(new Vector(dx, dy)))
  }

  setColliders (colliders) {
    this._colliders = colliders
  }

  addCollider (collider) {
    this._colliders.concat(collider)
  }
}
