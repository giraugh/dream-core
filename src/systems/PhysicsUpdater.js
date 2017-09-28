const System = require('./System.js')
const Transform = require('../components/Transform.js')
const Physics = require('../components/Physics.js')

module.exports = class PhysicsUpdater extends System {
  init () {
    this.components = [Transform, Physics]
  }

  update (dt, entities) {
    let all = entities.getWith(this.components)
    all.forEach(entity =>
      this.updateEach.apply(
        this,
        [dt, all].concat(
          this.components.map(entity.get.bind(entity))
        )
      )
    )
  }

  updateEach (dt, entities, transform, physics) {
    // Get Velocity
    let {x, y} = transform.getPosition()
    let {w, h} = transform.getSize()
    let {dx, dy} = physics.getVelocity()

    // Horizontal Update
    if (physics.empty(entities, x + dx, y, w, h)) {
      transform.addPosition(dx, 0)
    } else {
      while (physics.empty(entities, x + Math.sign(dx), y, w, h)) {
        transform.addPosition(Math.sign(dx), 0)
      }
      physics.setVelocity(0, null)
    }

    // Vertical Update
    if (physics.empty(entities, x, y + dy, w, h)) {
      transform.addPosition(0, dy)
    } else {
      while (physics.empty(entities, x, y + Math.sign(dy), w, h)) {
        transform.addPosition(0, Math.sign(dy))
      }
      physics.setVelocity(null, 0)
    }
  }
}
