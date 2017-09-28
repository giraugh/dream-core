module.exports = (xa, ya, wa, ha, xb, yb, wb, hb) => {
  let a = {
    left: xa,
    top: ya,
    right: xa + wa,
    bottom: ya + ha
  }

  let b = {
    left: xb,
    top: yb,
    right: xb + wb,
    bottom: yb + hb
  }

  return !(
    b.left > a.right ||
    b.right < a.left ||
    b.top > a.bottom ||
    b.bottom < a.top
  )
}
