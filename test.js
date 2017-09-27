const {EntityManager} = require('simple-ecs')
let entities = new EntityManager()

const {Transform, Sprite, Renderer} = require('./index.js')
const renderer = new Renderer()
let ent = entities.create()
  .addComponent(Transform)
  .addComponent(Sprite)

ent.get(Sprite).setImage(
  'https://www.raspberrypi.org/learning/weightlessness/images/Astro-cat.png'
)

const canvas = document.createElement('canvas')
canvas.width = 300
canvas.height = 300
document.body.appendChild(canvas)
let ctx = canvas.getContext('2d')

let loop = () => {
  renderer.draw(ctx, entities)
  window.requestAnimationFrame(loop)
}

loop()
