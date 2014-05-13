//EDIT buttons ON/OFF.
$("#edit-mode-btn").click(function() {
    $(".edit-mode-item").toggle();
});

// Character edit: Name, Gender, Age.

function characterFormDanger (_originalAttr,_originalBtnAttr) {
     if ($("#ncg-character-edit").hasClass("has-error")) return false;
     $("#ncg-character-edit").attr('class', "has-error " + _originalAttr);
     $("#ncg-character-btn-save").attr('class', "btn-danger " + _originalBtnAttr);
}

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
        if (!isIntegerAge(parseInt(_characterItemValue))) {
            characterFormDanger(_originalAttr, _originalBtnAttr);
            return;
        }
        ncg_tpl.character[_characterItemKey] = _characterItemValue;
        loadPath("ncg_tpl");
        }
    else {
        if (_characterItemValue.length < 2 || _characterItemValue.length > 30) {
            characterFormDanger(_originalAttr, _originalBtnAttr);
            return;
        }
        ncg_tpl.character[_characterItemKey] = _characterItemValue;
        loadPath("ncg_tpl");
    }
});

$("#ncg-character-btn-cancel").click( function() {
    $("#ncg-character-edit").hide();
});
//End of Character edit.

function manageCharacterInformation(_mode) {
    var characterInfoMode = "";
    $("#ncg-"+_mode+"-edit").hide();

    $("#ncg-"+_mode+"-add").click( function() {
        $("#ncg-"+_mode+"-add").hide();
        $("#ncg-"+_mode+"-edit").show();
        $("#ncg-"+_mode+"-btn-remove").hide();
        characterInfoMode = "add";
        var _inputCursor = $("#ncg-"+_mode+"-input");
        _inputCursor[0].selectionStart = _inputCursor[0].selectionEnd = _inputCursor.val().length;
        $("#ncg-"+_mode+"-input").selectionStart;
        $("#ncg-"+_mode+"-input").val("");
    });

    $("#ncg-"+_mode+"-btn-cancel").click( function() {
        $("#ncg-"+_mode+"-btn-remove").show();
        $("#ncg-"+_mode+"-edit").hide();
        $("#ncg-"+_mode+"-add").show();
    });

    $("#ncg-"+_mode+"-btn-save").click( function() {
        var _addInputItem = $("#ncg-"+_mode+"-input").val();
        if (characterInfoMode == "add") {
            ncg_tpl[_mode].push(_addInputItem);
        }
        if (isNumber(characterInfoMode)) {
            ncg_tpl[_mode][characterInfoMode] = _addInputItem;
            $("ncg-"+_mode+"-btn-remove").show();
        }
        loadPath("ncg_tpl");
        $("#ncg-"+_mode+"-edit").hide();
    });

    $(".ncg-"+_mode+"-info").each(function (index) {
        $("#ncg-"+_mode+"-item-"+index).click(function () {
            $("#ncg-"+_mode+"-edit").show();
            $("#ncg-"+_mode+"-add").hide();
            $("#ncg-"+_mode+"-btn-remove").show();
            characterInfoMode = index;
            $("#ncg-"+_mode+"-input").val($(this).data("value"));
            $("#ncg-"+_mode+"-input").data("key", $(this).data("key"));
            $("#ncg-"+_mode+"-input").focus();
        });
    });

    $("#ncg-"+_mode+"-btn-remove").click( function() {
        if (isNumber(characterInfoMode)) {
            for (var i=0; i< ncg_tpl[_mode].length; i++ ) {
                if (i == characterInfoMode) {
                    ncg_tpl[_mode].splice(i,1);
                    break;
                }
            }
        }
        loadPath("ncg_tpl");
        $("#ncg-"+_mode+"-edit").hide();
        $("#ncg-"+_mode+"-add").show();
    });
}
manageCharacterInformation("possessions");
manageCharacterInformation("goals");
manageCharacterInformation("knowledges");
manageCharacterInformation("pockets");
