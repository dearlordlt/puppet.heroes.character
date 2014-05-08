//
$("#edit-mode-btn").click(function() {
    $(".edit-mode-item").toggle();
});


$("#ncg-character-edit").hide();

$(".ncg-character-info").each(function (index) {

    $("#ncg-character-item-"+index).click(function () {
        $("#ncg-character-edit").show();

        var _inputCursor = $("#ncg-character-input");
        _inputCursor[0].selectionStart = _inputCursor[0].selectionEnd = _inputCursor.val().length;
        $("#ncg-character-input").selectionStart;
        $("#ncg-character-input").val($(this).data("value"));
        $("#ncg-character-input").data("key", $(this).data("key"));
    });
});


$("#ncg-character-btn-save").click(function () {
    var _characterItemValue = $("#ncg-character-input").val();
    var _characterItemKey = $("#ncg-character-input").data("key");
    if (_characterItemKey == "Age" && !isNumber(_characterItemValue)) return;
    if (_characterItemValue.length < 2 || _characterItemValue.length > 30) return;
    ncg_tpl.character[_characterItemKey] = _characterItemValue;
    loadPath("ncg_tpl");
});


$("#ncg-character-btn-cancel").click(function() {
    $("#ncg-character-edit").hide();
});
