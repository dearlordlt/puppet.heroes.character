var gridster;

$(function () {
    gridster = $(".cgGridster").gridster({
        widget_base_dimensions: [
            300,
            100],
        widget_margins: [5, 5],
        helper: 'clone',
        resize: {
            enabled: true,
            max_size: [2, 2],
            min_size: [1, 1]
        }
    }).data('cgGridster');
});


$("button[id^=attrMinusButton]").click(function () {
    var arrayPlace = this.id.match(/\d+/),
        _validatesmall = cg_tpl.Attributes[arrayPlace].attributeValue - 1,
        _points = cg_tpl.points;

    if (cg_tpl.Attributes[arrayPlace].attributeValue > 10) {
        cg_tpl.points -= (Math.ceil((((cg_tpl.Attributes[arrayPlace].attributeValue - 10) / 3) * 10) / 10)) * 10;
    }


    if (_validatesmall <= 7) {
        cg_tpl.Attributes[arrayPlace].attributeValue = 7;
    } else {
        cg_tpl.Attributes[arrayPlace].attributeValue -= 1;
    }

    if (cg_tpl.Attributes[arrayPlace].attributeValue < 10) {
        cg_tpl.points += (Math.floor((((cg_tpl.Attributes[arrayPlace].attributeValue - 10) / 3) * 10) / 10)) * 10;
    }

    loadPath("cg_tpl");
    refreshPoints("cg_tpl");
    $("#collapseOne" + arrayPlace).addClass("panel-collapse collapse in");
});


$("button[id^=attrPlusButton]").click(function () {
    var arrayPlace = this.id.match(/\d+/),
        _validatesmall = cg_tpl.Attributes[arrayPlace].attributeValue + 1;

    if (cg_tpl.Attributes[arrayPlace].attributeValue < 10) {
        cg_tpl.points -= (Math.floor((((cg_tpl.Attributes[arrayPlace].attributeValue - 10) / 3) * 10) / 10)) * 10;
    }

    if (_validatesmall >= 20) {
        cg_tpl.Attributes[arrayPlace].attributeValue = 20;
    } else {
        cg_tpl.Attributes[arrayPlace].attributeValue += 1;
    }


    if (cg_tpl.Attributes[arrayPlace].attributeValue > 10) {
        cg_tpl.points += (Math.ceil((((cg_tpl.Attributes[arrayPlace].attributeValue - 10) / 3) * 10) / 10)) * 10;
    }

    loadPath("cg_tpl");
    refreshPoints("cg_tpl");
    $("#collapseOne" + arrayPlace).addClass("panel-collapse collapse in");
});



