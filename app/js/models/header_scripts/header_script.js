$("#main-menu").hide(); //Nothing to work with
$("#menu-save").hide(); //Nothing to save

if(!supports_html5_storage()) {
    $("#actions-menu").hide();
    phAlert(
        "System alert",
        "Local storage is not supported by your system. Try to use different browser"
    );
} else {
    //Check if user already have data setup
    if(localStorage["puppet.hero.signed"] == "true") {
        //
    } else {
        localStorage["puppet.hero.signed"] = "true"
        var _characters = {characters : []};
        localStorage["puppet.hero.@.characters"] = JSON.stringify(_characters);
    }
}

//Make stuff draggable
$("#global-alert").draggable();
$("#global-save-name").draggable();
$("#global-load-name").draggable();

//Events
$("#global-alert button").click(function () {
    $("#global-alert").toggle(200);
});

$("#save-name-close").click(function () {
    $("#global-save-name").hide(200);
});

$("#load-name-close").click(function () {
    $("#global-load-name").hide(200);
});

$("#menu-new").click(function () {
    $("#main-menu").show(200);
    $("#menu-save").show();

    newMap ();
    new_ncg_tpl ();
    new_cg_tpl ();
});

$("#menu-save").click(function () {
    $("#global-save-name").show(200);
    $("#save-as-name").val(ncg_tpl.character.Name);
});

$("#menu-load").click(function () {
    $("#global-load-name").show(200);
    //Fill load characters list #load-character-name
    var _characters = JSON.parse(localStorage["puppet.hero.@.characters"]);
    $("#load-character-name").html("");
    for(var i = 0; i < _characters.characters.length; i ++) {
        $("#load-character-name").append('<option value="' + _characters.characters[i] + '">' + _characters.characters[i] + '</option>');
    }

    $("#load-as-name").val(ncg_tpl.character.Name);
});

$("#save-character-button").click(function() {
    var _cName = $("#save-as-name").val();

    localStorage["puppet.hero.#."+_cName+".cg"] = JSON.stringify(cg_tpl);
    localStorage["puppet.hero.#."+_cName+".ncg"] = JSON.stringify(ncg_tpl);
    localStorage["puppet.hero.#."+_cName+".map"] = JSON.stringify(map_tpl);

    var _characters = {characters : []};

    try {
        _characters = JSON.parse(localStorage["puppet.hero.@.characters"]);
        _characters.characters.push(_cName);
        localStorage["puppet.hero.@.characters"] = JSON.stringify(_characters);
    }
    catch(_err) {
        phAlert("Data alert", "No data found: " + _err + " " + _characters);
    }

    $("#global-save-name").hide(200);
});

$("#load-character-button").click(function() {
    var _cName = $("#load-character-name option:selected").text();

    try {
        JSON.parse(localStorage["puppet.hero.#." + _cName + ".cg"]);
    }
    catch(_err) {
        phAlert("Warning", "No character named " + _cName + " found");
    }

    cg_tpl = JSON.parse(localStorage["puppet.hero.#." + _cName + ".cg"]);
    ncg_tpl = JSON.parse(localStorage["puppet.hero.#." + _cName + ".ncg"]);
    map_tpl = JSON.parse(localStorage["puppet.hero.#." + _cName + ".map"]);

    $("#global-load-name").hide(200);
    $("#main-menu").show(200);
    $("#menu-save").show();

    loadPath("home_tpl");
});
