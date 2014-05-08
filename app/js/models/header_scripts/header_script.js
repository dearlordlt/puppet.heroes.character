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
        //phAlert("Local storage", "Already user");
    } else {
        localStorage["puppet.hero.signed"] = "true"
        phAlert("Howdy", "No local data found<br>Created new entry.");
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
    $("#load-as-name").val(ncg_tpl.character.Name);
});

$("#save-character-button").click(function() {
    localStorage["puppet.hero.#."+ncg_tpl.character.Name+".cg"] = JSON.stringify(cg_tpl);
    localStorage["puppet.hero.#."+ncg_tpl.character.Name+".ncg"] = JSON.stringify(ncg_tpl);
    localStorage["puppet.hero.#."+ncg_tpl.character.Name+".map"] = JSON.stringify(map_tpl);

    $("#global-save-name").hide(200);
});

$("#load-character-button").click(function() {
    cg_tpl = JSON.parse(localStorage["puppet.hero.#."+$("#load-as-name").val()+".cg"]);
    ncg_tpl = JSON.parse(localStorage["puppet.hero.#."+$("#load-as-name").val()+".ncg"]);
    map_tpl = JSON.parse(localStorage["puppet.hero.#."+$("#load-as-name").val()+".map"]);

    $("#global-load-name").hide(200);
    $("#main-menu").show(200);
    $("#menu-save").show();
    loadPath("home_tpl");
});
