if(!supports_html5_storage()) {
    $("#actions-menu").hide();
    phAlert("System alert", "Local storage is not supported by your system. Try to use different browser");

    //Check if user already have data setup
    if(!localStorage["puppet.heroes.characters"])
}

//Make stuff draggable
$("#global-alert").draggable();

//Events
$("#global-alert button").click(function () {
    $("#global-alert").toggle(200);
});
