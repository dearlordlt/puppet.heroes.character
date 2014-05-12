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

//Possesions edit.

var ncg_possessionsMode = "";
$("#ncg-possessions-edit").hide();

$("#ncg-possessions-add").click( function() {
    $("#ncg-possessions-add").hide();
    $("#ncg-possessions-edit").show();
    $("#ncg-possessions-btn-remove").hide();
    ncg_possessionsMode = "add";
    var _inputCursor = $("#ncg-possessions-input");
    _inputCursor[0].selectionStart = _inputCursor[0].selectionEnd = _inputCursor.val().length;
    $("#ncg-possessions-input").selectionStart;
    $("#ncg-possessions-input").val("");
});

$("#ncg-possessions-btn-cancel").click( function() {
    $("#ncg-possessions-btn-remove").show();
    $("#ncg-possessions-edit").hide();
    $("#ncg-possessions-add").show();
});

$("#ncg-possessions-btn-save").click( function() {
    var _addInputItem = $("#ncg-possessions-input").val();
    if (ncg_possessionsMode == "add") {
        ncg_tpl.possessions.push(_addInputItem);
    }
    if (isNumber(ncg_possessionsMode)) {
        ncg_tpl.possessions[ncg_possessionsMode] = _addInputItem;
        $("ncg-possessions-btn-remove").show();
    }
    loadPath("ncg_tpl");
    $("#ncg-possessions-edit").hide();
});

$(".ncg-possessions-info").each(function (index) {
    $("#ncg-possessions-item-"+index).click(function () {
        $("#ncg-possessions-edit").show();
        $("#ncg-possessions-add").hide();
        $("#ncg-possessions-btn-remove").show();
        ncg_possessionsMode = index;
        var _inputCursor = $("#ncg-possessions-input");
        _inputCursor[0].selectionStart = _inputCursor[0].selectionEnd = _inputCursor.val().length;
        $("#ncg-possessions-input").selectionStart;
        $("#ncg-possessions-input").val($(this).data("value"));
        $("#ncg-possessions-input").data("key", $(this).data("key"));
    });
});

$("#ncg-possessions-btn-remove").click( function() {
    if (isNumber(ncg_possessionsMode)) {
        for (var i=0; i< ncg_tpl.possessions.length; i++ ) {
            if (i == ncg_possessionsMode) {
                ncg_tpl.possessions.splice(i,1);
                break;
            }
        }
    }
    loadPath("ncg_tpl");
    $("#ncg-possessions-edit").hide();
    $("#ncg-possessions-add").show();
});
//End of Possessions edit.

//Goals edit.

var ncg_goalsMode = "";
$("#ncg-goals-edit").hide();

$("#ncg-goals-add").click( function() {
    $("#ncg-goals-add").hide();
    $("#ncg-goals-edit").show();
    $("#ncg-goals-btn-remove").hide();
    ncg_possessionsMode = "add";
    var _inputCursor = $("#ncg-goals-input");
    _inputCursor[0].selectionStart = _inputCursor[0].selectionEnd = _inputCursor.val().length;
    $("#ncg-goals-input").selectionStart;
    $("#ncg-goals-input").val("");
});

$("#ncg-goals-btn-cancel").click( function() {
    $("#ncg-goals-btn-remove").show();
    $("#ncg-goals-edit").hide();
    $("#ncg-goals-add").show();
});

$("#ncg-goals-btn-save").click( function() {
    var _addInputItem = $("#ncg-goals-input").val();
    if (ncg_possessionsMode == "add") {
        ncg_tpl.goals.push(_addInputItem);
    }
    if (isNumber(ncg_possessionsMode)) {
        ncg_tpl.goals[ncg_possessionsMode] = _addInputItem;
        $("ncg-goals-btn-remove").show();
    }
    loadPath("ncg_tpl");
    $("#ncg-goals-edit").hide();
});

$(".ncg-goals-info").each(function (index) {
    $("#ncg-goals-item-"+index).click(function () {
        $("#ncg-goals-edit").show();
        $("#ncg-goals-add").hide();
        $("#ncg-goals-btn-remove").show();
        ncg_possessionsMode = index;
        var _inputCursor = $("#ncg-goals-input");
        _inputCursor[0].selectionStart = _inputCursor[0].selectionEnd = _inputCursor.val().length;
        $("#ncg-goals-input").selectionStart;
        $("#ncg-goals-input").val($(this).data("value"));
        $("#ncg-goals-input").data("key", $(this).data("key"));
    });
});

$("#ncg-goals-btn-remove").click( function() {
    if (isNumber(ncg_possessionsMode)) {
        for (var i=0; i< ncg_tpl.goals.length; i++ ) {
            if (i == ncg_possessionsMode) {
                ncg_tpl.goals.splice(i,1);
                break;
            }
        }
    }
    loadPath("ncg_tpl");
    $("#ncg-goals-edit").hide();
    $("#ncg-goals-add").show();
});
//End of Goals edit.

//Knowledges edit.

var ncg_knowledgesMode = "";
$("#ncg-knowledges-edit").hide();

$("#ncg-knowledges-add").click( function() {
    $("#ncg-knowledges-add").hide();
    $("#ncg-knowledges-edit").show();
    $("#ncg-knowledges-btn-remove").hide();
    ncg_possessionsMode = "add";
    var _inputCursor = $("#ncg-knowledges-input");
    _inputCursor[0].selectionStart = _inputCursor[0].selectionEnd = _inputCursor.val().length;
    $("#ncg-knowledges-input").selectionStart;
    $("#ncg-knowledges-input").val("");
});

$("#ncg-knowledges-btn-cancel").click( function() {
    $("#ncg-knowledges-btn-remove").show();
    $("#ncg-knowledges-edit").hide();
    $("#ncg-knowledges-add").show();
});

$("#ncg-knowledges-btn-save").click( function() {
    var _addInputItem = $("#ncg-knowledges-input").val();
    if (ncg_possessionsMode == "add") {
        ncg_tpl.knowledges.push(_addInputItem);
    }
    if (isNumber(ncg_possessionsMode)) {
        ncg_tpl.knowledges[ncg_possessionsMode] = _addInputItem;
        $("ncg-knowledges-btn-remove").show();
    }
    loadPath("ncg_tpl");
    $("#ncg-knowledges-edit").hide();
});

$(".ncg-knowledges-info").each(function (index) {
    $("#ncg-knowledges-item-"+index).click(function () {
        $("#ncg-knowledges-edit").show();
        $("#ncg-knowledges-add").hide();
        $("#ncg-knowledges-btn-remove").show();
        ncg_possessionsMode = index;
        var _inputCursor = $("#ncg-knowledges-input");
        _inputCursor[0].selectionStart = _inputCursor[0].selectionEnd = _inputCursor.val().length;
        $("#ncg-knowledges-input").selectionStart;
        $("#ncg-knowledges-input").val($(this).data("value"));
        $("#ncg-knowledges-input").data("key", $(this).data("key"));
    });
});

$("#ncg-knowledges-btn-remove").click( function() {
    if (isNumber(ncg_possessionsMode)) {
        for (var i=0; i< ncg_tpl.knowledges.length; i++ ) {
            if (i == ncg_possessionsMode) {
                ncg_tpl.knowledges.splice(i,1);
                break;
            }
        }
    }
    loadPath("ncg_tpl");
    $("#ncg-knowledges-edit").hide();
    $("#ncg-knowledges-add").show();
});
//End of Knowledges edit.

//Pockets edit.

var ncg_pocketsMode = "";
$("#ncg-pockets-edit").hide();

$("#ncg-pockets-add").click( function() {
    $("#ncg-pockets-add").hide();
    $("#ncg-pockets-edit").show();
    $("#ncg-pockets-btn-remove").hide();
    ncg_possessionsMode = "add";
    var _inputCursor = $("#ncg-pockets-input");
    _inputCursor[0].selectionStart = _inputCursor[0].selectionEnd = _inputCursor.val().length;
    $("#ncg-pockets-input").selectionStart;
    $("#ncg-pockets-input").val("");
});

$("#ncg-pockets-btn-cancel").click( function() {
    $("#ncg-pockets-btn-remove").show();
    $("#ncg-pockets-edit").hide();
    $("#ncg-pockets-add").show();
});

$("#ncg-pockets-btn-save").click( function() {
    var _addInputItem = $("#ncg-pockets-input").val();
    if (ncg_possessionsMode == "add") {
        ncg_tpl.pockets.push(_addInputItem);
    }
    if (isNumber(ncg_possessionsMode)) {
        ncg_tpl.pockets[ncg_possessionsMode] = _addInputItem;
        $("ncg-pockets-btn-remove").show();
    }
    loadPath("ncg_tpl");
    $("#ncg-pockets-edit").hide();
});

$(".ncg-pockets-info").each(function (index) {
    $("#ncg-pockets-item-"+index).click(function () {
        $("#ncg-pockets-edit").show();
        $("#ncg-pockets-add").hide();
        $("#ncg-pockets-btn-remove").show();
        ncg_possessionsMode = index;
        var _inputCursor = $("#ncg-pockets-input");
        _inputCursor[0].selectionStart = _inputCursor[0].selectionEnd = _inputCursor.val().length;
        $("#ncg-pockets-input").selectionStart;
        $("#ncg-pockets-input").val($(this).data("value"));
        $("#ncg-pockets-input").data("key", $(this).data("key"));
    });
});

$("#ncg-pockets-btn-remove").click( function() {
    if (isNumber(ncg_possessionsMode)) {
        for (var i=0; i< ncg_tpl.pockets.length; i++ ) {
            if (i == ncg_possessionsMode) {
                ncg_tpl.pockets.splice(i,1);
                break;
            }
        }
    }
    loadPath("ncg_tpl");
    $("#ncg-pockets-edit").hide();
    $("#ncg-pockets-add").show();
});
//End of Pockets edit.
