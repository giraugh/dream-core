const Vector = require('../util/Vector.js')
const rectOverlap = require('../util/rectOverlap.js')

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

  empty (entities, x1, y1, w1, h1) {
    let all = entities.concat(this._colliders).filter(entity => entity.get('physics') !== this)
    return all.every(entity => {
      let transform = entity.get('transform')
      let {x, y} = transform.getPosition()
      let {w, h} = transform.getSize()
      return !rectOverlap(x1, y1, w1, h1, x, y, w, h)
    })
  }

  velocity () { return this._velocity }
  setVelocity (x, y) { this._velocity.set(x, y) }
  getVelocity () {
    let {x, y} = this._velocity.get()
    return {
      dx: x,
      dy: y
    }
  }
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
