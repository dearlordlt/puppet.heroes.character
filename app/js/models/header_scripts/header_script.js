if(!supports_html5_storage()) {
    $("#actions-menu").hide();
    phAlert(
        "System alert",
        "Local storage is not supported by your system. Try to use different browser"
    );
} else {
    //Check if user already have data setup
    if(localStorage["puppet.hero.signed"] == "true") {
        console.log("Already user");
    } else {
        localStorage["puppet.hero.signed"] = "true"
        console.log("Not user");
    }
}

//Make stuff draggable
$("#global-alert").draggable();

//Events
$("#global-alert button").click(function () {
    $("#global-alert").toggle(200);
});
