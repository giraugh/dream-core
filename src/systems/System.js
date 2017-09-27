module.exports = class System {
  constructor () {
    this.components = []
    this.init()
  }

  init () {
    // Set the required components here
  }

  update (dt, entities) {
    entities.getWith(this.components).forEach(entity =>
      this.updateEach.apply(
        this,
        [dt].concat(
          this.components.map(entity.get.bind(entity))
        )
      )
    )
  }

  draw (ctx, entities) {
    entities.getWith(this.components).forEach(entity =>
      this.drawEach.apply(
        this,
        [ctx].concat(
          this.components.map(entity.get.bind(entity))
        )
      )
    )
  }

  updateEach () {
    //
  }

  drawEach (ctx) {
    //
  }
}
