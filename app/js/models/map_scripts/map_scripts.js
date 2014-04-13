var canvas = document.createElement('canvas');
canvas.id               = "MapLayer";
canvas.width            = 800;
canvas.height           = 600;
//canvas.style.zIndex   = 8;
//canvas.style.position = "absolute";
canvas.style.border     = "1px solid";

mapCanvas = document.getElementById("mapCanvas");
mapCanvas.appendChild(canvas);

paper.setup(canvas);

var mapLayer = new paper.Layer();

//canvas.width = $("#mapCanvas").width(); //Uncomment to make map canvas width dynamic

var man_blue = new paper.Raster('man-blue');
var man_black = new paper.Raster('man-black');
var man_green = new paper.Raster('man-green');
var man_orange = new paper.Raster('man-orange');
var man_red = new paper.Raster('man-red');

var dummys_arr = [];
var coords_arr = [];

var selectedDummy = "";

function toggleCoordsText() {
    map_tpl.toggleCoords = !map_tpl.toggleCoords;

    if(map_tpl.toggleCoords) $("#toggleCoords").val("Hide coords");
    else $("#toggleCoords").val("Show coords");

    for(var i=0; i < coords_arr.length; i++) {
        coords_arr[i].visible = map_tpl.toggleCoords;
    }
    paper.view.draw();
} toggleCoordsText();

function initDefaultCharacters() {
    dummys_arr = [man_blue, man_black, man_green, man_orange, man_red];
    for(var i=0; i < dummys_arr.length; i++) {
        var dummy = dummys_arr[i];
        dummy.position.x = 750;
        dummy.position.y = i*35+25;

        dummy.onMouseDown = function(event) {
            for(var j = 0; j < dummys_arr.length; j++) {
                dummys_arr[j].selected = false;
            }
            selectedDummy = this;
            selectedDummy.selected = !selectedDummy.selected;
        }
    }
    console.log("Characters placed");
}

function initMap() {
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
                fillColor: '#F2FBEF',
                strokeColor: 'black',
                strokeWidth: 1
            }
            hexagon.data = {
                gridX : i,
                gridY : j
            }

            hexagon.onMouseEnter = function (event) {
                this.fillColor = '#ADD8E6';
                $("#tileX").text(this.data.gridX);
                $("#tileY").text(this.data.gridY);
            }

            hexagon.onMouseLeave = function (event) {
                this.fillColor = '#F2FBEF';
            }

            hexagon.onMouseDown = function (event) {
                var newDummy = selectedDummy.clone(true);
                newDummy.position = this.position;
            }

            var text = new paper.PointText(new paper.Point(xpos, ypos+3));
            coords_arr.push(text);
            text.justification = 'center';
            text.fillColor = 'black';
            text.content = '['+i+':'+j+']';
            text.locked = true;
        }
    }
    console.log("Map size : [" + map_tpl.sizeX + " : " + map_tpl.sizeY + "]");

    initDefaultCharacters();

    paper.view.draw();
}

initMap();

$("#toggleCoords").click(function () {
    toggleCoordsText();
});

$("#changeMapSizeBnt").click(function () {
    map_tpl.sizeX = parseInt($("#inpSizeX").val());
    map_tpl.sizeY = parseInt($("#inpSizeY").val());

    project.activeLayer.remove();
    mapLayer = new paper.Layer();

    initMap();
});

//This must be last line of the code
paper.view.draw();
