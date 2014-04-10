var canvas = document.createElement('canvas');
canvas.id     = "MapLayer";
canvas.width  = 600;
canvas.height = 600;
//canvas.style.zIndex   = 8;
//canvas.style.position = "absolute";
canvas.style.border   = "1px solid";

mapCanvas = document.getElementById("mapCanvas");
mapCanvas.appendChild(canvas);

paper.setup(canvas);

var hexagon = new paper.Path.RegularPolygon(new paper.Point(50, 50), 6, 25);
hexagon.strokeColor = '#ff0000';

//This must be last line of the code
paper.view.draw();
