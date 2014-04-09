/* Old way
var map_tpl = {
    title : "Map"
}
*/

/* New Way */
var model_map_tpl = function(title, size) {
    this.title = title;
    this.size = size;
}

var map_tpl = new model_map_tpl(
    "Map",
    0
);
