module.exports = (xa, ya, wa, ha, xb, yb, wb, hb) => {
  return !(
      xb > xa + wa ||
      xb < xa ||
      yb > ya + ha ||
      yb + hb < ya
    )
}
