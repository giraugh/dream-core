/* global Image */

module.exports = class Sprite {
  constructor () {
    this._image = null
  }

  setImage (src) {
    if (typeof src === 'string') {
      this._image = new Image()
      this._image.src = src
    } else {
      this._image = src
    }
  }

  getImage (src) {
    return this._image
  }
}
