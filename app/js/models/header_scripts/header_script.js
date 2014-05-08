if(!supports_html5_storage()) {
    $("#actions-menu").hide();
    phAlert("System alert", "Local storage is not supported by your system. Try to use different browser");
}

$("#global-alert").draggable();
$("#global-alert button").click(function () {
    $("#global-alert").toggle(200);
});
