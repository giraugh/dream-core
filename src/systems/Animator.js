const System = require('./System.js')
const Sprite = require('../components/Sprite.js')
const Animation = require('../components/Animation.js')

module.exports = class Animator extends System {
  init () {
    this.components = [Sprite, Animation]
  }

  updateEach (dt, sprite, animation) {
    animation.tick(dt)
  }

  drawEach (ctx, sprite, animation) {
    sprite.setImage(
      animation.getImage()
    )
  }
}
