// ACTORS ============================================================
// they move around

function Actor(p) {
  this.p = p || xy(0, 0);
  this.v = xy(0, 0);

  this.tick = function() {
    this.p.x += this.v.x;
    this.p.y += this.v.y;
  }
}