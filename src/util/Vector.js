module.exports = class Vector {
  constructor (x, y) {
    if (y === undefined) {
      let r = x
      x = Math.cos(r)
      y = Math.sin(r)
    }

    this._x = x
    this._y = y
  }

  set (x, y) {
    if (y === undefined) {
      let r = x
      x = Math.cos(r)
      y = Math.sin(r)
    }

    this._x = x
    this._y = y
  }

  add (v) {
    return new this.constructor(this.x() + v.x(), this.y() + v.y())
  }

  subtract (v) {
    return new this.constructor(this.x() - v.x(), this.y() - v.y())
  }

  multiply (v) {
    return new this.constructor(this.x() * v.x(), this.y() * v.y())
  }

  divide (v) {
    return new this.constructor(this.x() / v.x(), this.y() / v.y())
  }

  angle () {
    let x = this.x()
    let y = this.y()
    let r = Math.atan2(y, x)
    return r
  }

  normalise () {
    let x = this.x()
    let y = this.y()
    let m = Math.max(x, y)
    return new this.constructor(x / m, y / m)
  }

  get () {
    return {
      x: this.x(),
      y: this.y()
    }
  }

  x () {
    return this._x
  }

  y () {
    return this._y
  }

  static fromAngle (r) {
    let x = Math.cos(r)
    let y = Math.sin(r)
    return {x, y}
  }
}
