// Unused fancy stuff.

var Hud = {
  draw: function() {
    this.drawEnergyDisplay();
    if (gameplay_frame % 20 === 0) { this.fillInfo(); }
  },

  fillInfo: function() {
    $("#game-info #fps").textContent = Math.round(avg_fps * 10)/10;
  },

  drawEnergyDisplay: function() {
    var p = energy_meter_position;
    (new Battery()).drawRepr(p, hud_color, 2);

    p = vec_add(p, xy(1, 0.1));

    draw.r(ctx,
      p,
      vec_add(p, energy_meter_size),
      draw.shapeStyle(hud_color_dark)
    );
    
    draw.r(ctx,
      p,
      vec_add(p, xy(energy_meter_size.x * Player.drone.energy, energy_meter_size.y)),
      draw.shapeStyle(hud_color)
    );

    // `todo: include a percentage next to the bar
  }
}

