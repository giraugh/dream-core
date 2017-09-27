/* global Image */

module.exports = class Sprite {
  constructor () {
    this._image = null
  }

  setImage (src) {
    this._image = new Image()
    this._image.src = src
  }

  getImage (src) {
    return this._image
  }
}
