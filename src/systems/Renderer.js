const System = require('./System.js')
const Transform = require('../components/Transform.js')
const Sprite = require('../components/Sprite.js')

module.exports = class Renderer extends System {
  init () {
    this.components = [Transform, Sprite]
  }

  drawEach (ctx, transform, sprite) {
    let {x, y} = transform.getPosition()
    ctx.drawImage(sprite.getImage(), x, y)
  }
}
