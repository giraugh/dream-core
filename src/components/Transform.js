const Vector = require('../util/Vector.js')

module.exports = class Transform {
  constructor () {
    this._position = new Vector(0, 0)
    this._size = new Vector(1, 1)
    this._rotation = new Vector(0)
  }

  position () { return this._position }
  setPosition (x, y) { return this._position.set(x, y) }
  getPosition () { return this._position.get() }

  size () { return this._size }
  setSize (x, y) { return this._size.set(x, y) }
  getSize () { return this._position.get() }

  rotation () { return this._rotation }
  setRotation (r) { return this._rotation.set(r) }
  getRotation () { return this._rotation.angle() }
}
