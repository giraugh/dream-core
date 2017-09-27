/* global Image */

module.exports = class Animation {
  constructor () {
    this._frames = []
    this._frame = 0
    this._delay = 100
    this._timer = 0
  }

  tick (dt) {
    this._timer += dt
    if (this._timer > this._delay) {
      this._timer = 0
      this.next()
    }
  }

  next () {
    this._frame++
    if (this._frame > this.length() - 1) { this._frame = 0 }
  }

  getImage () {
    return this._frames[this._frame]
  }

  length () {
    return this._frames.length
  }

  setFrames (frames) {
    this._frames = frames.map(src => {
      let i = new Image()
      i.src = src
      return i
    })
  }

  setDelay (delay) {
    this._delay = delay
  }
}
