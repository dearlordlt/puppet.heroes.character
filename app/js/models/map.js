var model_map_tpl = function(title, sizeX, sizeY, toggleCoords) {
    this.title = title;
    this.sizeX = sizeX;
    this.sizeY = sizeY;
    this.toggleCoords = toggleCoords;
}

var map_tpl = new model_map_tpl(
    "Map", /* Title */
    13, /* sizeX */
    15, /* sizeY */
    false /* toggleCoords */
);
