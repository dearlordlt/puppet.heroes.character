$("#map-alert").hide(0);
$("#map-popup").draggable();
$("#map-popup").hide(0);

var canvas = document.createElement('canvas');
canvas.id               = "MapLayer";
canvas.width            = 700;
canvas.height           = 600;
canvas.style.border     = "1px solid";

mapCanvas = document.getElementById("mapCanvas");
mapCanvas.appendChild(canvas);

paper.setup(canvas);

var mapLayer = new paper.Layer();

var man_blue = new paper.Raster('man-blue');
    man_blue.data.color = 'man-blue';
var man_black = new paper.Raster('man-black');
    man_black.data.color = 'man-black';
var man_green = new paper.Raster('man-green');
    man_green.data.color = 'man-green';
var man_orange = new paper.Raster('man-orange');
    man_orange.data.color = 'man-orange';
var man_red = new paper.Raster('man-red');
    man_red.data.color = 'man-red';

var dummys_arr = [];
var coords_arr = [];

var selected_soldier = "";
var placed_soldiers = [];
var selectedDummy = "";

/**
* changes size of map
* @param {_inpSizeX} width
* @param {_inpSizeX} height
*/
function changeMapSize (_inpSizeX, _inpSizeX) {
    map_tpl.sizeX = _inpSizeX;
    map_tpl.sizeY = _inpSizeY;

    project.activeLayer.remove();
    mapLayer = new paper.Layer();

    initMap();
}

/**
* Deselcts al soldiers
*/
function deselectAllSoldiers () {
    for(var i = 0; i < placed_soldiers.length; i++) {
        placed_soldiers[i].selected = false;
    }
}

/*
* Show-hide texts
*/
function toggleCoordsText() {
    map_tpl.toggleCoords = !map_tpl.toggleCoords;

    if(!map_tpl.toggleCoords) $("#toggleCoords").val("Show coords");
    else $("#toggleCoords").val("Hide coords");

    for(var i=0; i < coords_arr.length; i++) {
        coords_arr[i].visible = map_tpl.toggleCoords;
    }
    paper.view.draw();
} toggleCoordsText();

function initDefaultCharacters() {
    dummys_arr = [man_blue, man_black, man_green, man_orange, man_red];
    for(var i=0; i < dummys_arr.length; i++) {
        var _dummy = dummys_arr[i];
        _dummy.position.x = 650;
        _dummy.position.y = i*35+25;

        _dummy.onMouseDown = function(event) {
            for(var j = 0; j < dummys_arr.length; j++) {
                dummys_arr[j].selected = false;
            }
            selectedDummy = this;
            this.selected = !this.selected;

            if(this.selected) {
                this.rotate(60);
            }
        }
    }
    //console.log("Characters placed");
}

function initMap() {
    for (var i = 0; i < map_tpl.sizeX; i++) {
        var _margin = 30;
        for(var j = 0; j < map_tpl.sizeY; j++) {
            var _xpos, _ypos;
            if(!isEven(j)) {
                _xpos = 43*i+_margin;
                _ypos = 50*(j*0.75)+_margin;
            } else {
                _xpos = 43*(i)+(_margin+22);
                _ypos = 50*(j*0.75)+_margin;
            }

            var _hexagon = new paper.Path.RegularPolygon(new paper.Point(_xpos, _ypos), 6, 25);
            _hexagon.data.ocupiedBy = undefined;
            _hexagon.style = {
                fillColor: '#F2FBEF',
                strokeColor: 'black',
                strokeWidth: 1
            }
            _hexagon.data = {
                gridX : i,
                gridY : j
            }

            _hexagon.onMouseEnter = function (event) {
                this.fillColor = '#ADD8E6';
                $("#tileX").text(this.data.gridX);
                $("#tileY").text(this.data.gridY);
            }

            _hexagon.onMouseLeave = function (event) {
                this.fillColor = '#F2FBEF';
            }

            _hexagon.onMouseDown = function (event) {
                if(this.data.ocupiedBy != undefined) {
                    phAlert("Warning!", "This tile is ocupied, off with you!");
                    return;
                }
                if(selectedDummy != "" && selectedDummy.selected) {
                    var _man = new paper.Raster(selectedDummy.data.color);
                    _man.selected = false;
                    _man.position = this.position;
                    _man.rotation = selectedDummy.rotation;
                    selectedDummy.selected = false;
                    this.data.ocupiedBy = _man;
                    placed_soldiers.push(_man);

                    _man.onMouseDown = function (event) {
                        $("#map-popup").hide(0);
                        deselectAllSoldiers();
                        this.selected = true;
                        selected_soldier = this;
                        $("#map-popup").show(300, "swing");
                    }
                }
            }

            var _text = new paper.PointText(new paper.Point(_xpos, _ypos+3));
            coords_arr.push(_text);
            _text.justification = 'center';
            _text.fillColor = 'black';
            _text.content = '['+i+':'+j+']';
            _text.locked = true;
        }
    }
    console.log("Map size : [" + map_tpl.sizeX + " : " + map_tpl.sizeY + "]");

    initDefaultCharacters();

    paper.view.draw();
}

initMap();

$("#toggleCoords").click(function () {
    toggleCoordsText();
}); toggleCoordsText();

$("#close-map-popup").click(function () {
    $("#map-popup").hide(100);
});

$("#close-map-top-menu").click(function () {
    $(".map_controlls").toggle(100);
    if($(".map_controlls").css('display') == 'none')
        $("#tmap-hide-show-icon").attr('class', 'glyphicon glyphicon-chevron-up');
    else
        $("#tmap-hide-show-icon").attr('class', 'glyphicon glyphicon-chevron-down');
});

// To initially run the function:
$(window).resize();

//This must be last line of 'paper' operations
paper.view.draw();
