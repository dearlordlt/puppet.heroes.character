var canvas = document.createElement('canvas');
canvas.id               = "MapLayer";
canvas.width            = 600;
canvas.height           = 600;
//canvas.style.zIndex   = 8;
//canvas.style.position = "absolute";
canvas.style.border     = "1px solid";

mapCanvas = document.getElementById("mapCanvas");
mapCanvas.appendChild(canvas);

paper.setup(canvas);

for (var i = 0; i < map_tpl.sizeX; i++) {
    for(var j = 0; j < map_tpl.sizeY; j++) {
        var xpos, ypos;
        if(!isEven(j)) {
            xpos = 43*i+30;
            ypos = 50*(j*0.75)+30;
        } else {
            xpos = 43*(i)+52;
            ypos = 50*(j*0.75)+30;
        }

        var hexagon = new paper.Path.RegularPolygon(new paper.Point(xpos, ypos), 6, 25);
        //hexagon.strokeColor = '#ff0000';
        hexagon.style = {
            fillColor: new paper.Color(1, 0, 0),
            strokeColor: 'black',
            strokeWidth: 1
        }

        var text = new paper.PointText(new paper.Point(xpos, ypos+3));
        text.justification = 'center';
        text.fillColor = 'black';
        text.content = '['+i+':'+j+']';
    }
}

console.log("Map size : [" + map_tpl.sizeX + " : " + map_tpl.sizeY + "]");

//This must be last line of the code
paper.view.draw();
