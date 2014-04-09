var paths = [
    {tpl: "home_tpl"},
    {tpl: "cg_tpl"},
    {tpl: "ncg_tpl"},
    {tpl: "map_tpl"}
];

function getPath(path) {
    for(var key in paths) {
        if(paths[key].tpl == path){
            return path;
        }
    }
    return false;
}