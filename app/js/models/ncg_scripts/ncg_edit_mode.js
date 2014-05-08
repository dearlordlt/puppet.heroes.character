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



    var _originalAttr = $("#ncg-character-edit").attr("class");
    var _originalBtnAttr = $("#ncg-character-btn-save").attr("class");
    var _characterItemValue = $("#ncg-character-input").val();
    var _characterItemKey = $("#ncg-character-input").data("key");
    if (_characterItemKey == "Age") {
        if (!isNumber(_characterItemValue)) {
            $("#ncg-character-edit").attr('class', "has-error " + _originalAttr);
            $("#ncg-character-btn-save").attr('class', "btn-danger " + _originalBtnAttr);
            return;
        }
        if (parseInt(_characterItemValue) < 0) {
            $("#ncg-character-edit").attr('class', "has-error " + _originalAttr);
            $("#ncg-character-btn-save").attr('class', "btn-danger " + _originalBtnAttr);
            return;
        }
        if (_characterItemValue.length > 5) {
            $("#ncg-character-edit").attr('class', "has-error " + _originalAttr);
            $("#ncg-character-btn-save").attr('class', "btn-danger " + _originalBtnAttr);
            return;
        }
        ncg_tpl.character[_characterItemKey] = _characterItemValue;
        loadPath("ncg_tpl");
    }
    else {
        if (_characterItemValue.length < 2 || _characterItemValue.length > 30) {
            $("#ncg-character-edit").attr('class', "has-error " + _originalAttr);
            $("#ncg-character-btn-save").attr('class', "btn-danger " + _originalBtnAttr);
            return;
        }
        ncg_tpl.character[_characterItemKey] = _characterItemValue;
        loadPath("ncg_tpl");
    }
});

$("#ncg-character-btn-cancel").click(function() {
    $("#ncg-character-edit").hide();
});
