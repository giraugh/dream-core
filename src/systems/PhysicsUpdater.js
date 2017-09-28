const System = require('./System.js')
const Transform = require('../components/Transform.js')
const Physics = require('../components/Physics.js')

module.exports = class PhysicsUpdater extends System {
  init () {
    this.components = [Transform, Physics]
  }

  updateEach (dt, transform, physics) {
    // Get Velocity
    let {x, y} = transform.getPosition()
    let {w, h} = transform.getSize()
    let {dx, dy} = physics.getVelocity()

    // Horizontal Update
    if (physics.empty(x + dx, y, w, h)) {
      transform.addPosition(dx, 0)
    } else {
      while (physics.empty(x + Math.sign(dx), y, w, h)) {
        transform.addPosition(Math.sign(dx), 0)
      }
      physics.setVelocity(0, null)
    }

    // Vertical Update
    if (physics.empty(x, y + dy, w, h)) {
      transform.addPosition(0, dy)
    } else {
      while (physics.empty(x, y + Math.sign(dy), w, h)) {
        transform.addPosition(0, Math.sign(dy))
      }
      physics.setVelocity(null, 0)
    }
  }
}
