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
    var margin = 30;
    for(var j = 0; j < map_tpl.sizeY; j++) {
        var xpos, ypos;
        if(!isEven(j)) {
            xpos = 43*i+margin;
            ypos = 50*(j*0.75)+margin;
        } else {
            xpos = 43*(i)+(margin+22);
            ypos = 50*(j*0.75)+margin;
        }

        var hexagon = new paper.Path.RegularPolygon(new paper.Point(xpos, ypos), 6, 25);
        hexagon.style = {
            fillColor: '#ff0000',
            strokeColor: 'black',
            strokeWidth: 1
        }
        hexagon.data = {
            gridX : i,
            gridY : j
        }

        hexagon.onMouseEnter = function (event) {
            this.fillColor = '#042277';
        }

        hexagon.onMouseLeave = function (event) {
            this.fillColor = '#ff0000';
        }

        var text = new paper.PointText(new paper.Point(xpos, ypos+3));

        text.justification = 'center';
        text.fillColor = 'black';
        text.content = '['+i+':'+j+']';
        text.locked = true;
    }
}

console.log("Map size : [" + map_tpl.sizeX + " : " + map_tpl.sizeY + "]");

//This must be last line of the code
paper.view.draw();
