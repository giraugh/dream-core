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
  addPosition (dx, dy) {
    this.setPosition(this.position().add(new Vector(dx, dy)))
  }

  size () { return this._size }
  setSize (w, h) { return this._size.set(w, h) }
  getSize () {
    let {x, y} = this._position.get()
    return {
      w: x, h: y
    }
  }
  addSize (dw, dh) {
    this.setSize(this.size().add(new Vector(dw, dh)))
  }

  rotation () { return this._rotation }
  setRotation (r) { return this._rotation.set(r) }
  getRotation () { return this._rotation.angle() }
  addRotation (r) {
    this.setRotation(this.rotation().add(new Vector(r)).normalise())
  }
}
