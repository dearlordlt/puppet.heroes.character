/* FUNCTION FOR SHOWCASE ONLY HIDES COMBAT SKILL EDIT CONTROLS*/
/*------------------------------------*/
$("li[id^=editCombatSkill]").hide();
$("table[id=shieldStatistics]").hide();

/*------------------------------------*/

$("button[id^=attrMinusButton]").click(function () {
    var arrayPlace = this.id.match(/\d+/),
        _validatesmall = cg_tpl.Attributes[arrayPlace].attributeValue - 1,
        _points = cg_tpl.points;
        _attributePoints = cg_tpl.attributesPoints;

    if (cg_tpl.Attributes[arrayPlace].attributeValue > 10) {
        cg_tpl.attributesPoints -= (Math.ceil((((cg_tpl.Attributes[arrayPlace].attributeValue - 10) / 3) * 10) / 10)) * 10;
    }


    if (_validatesmall <= 7) {
        cg_tpl.Attributes[arrayPlace].attributeValue = 7;
    } else {
        cg_tpl.Attributes[arrayPlace].attributeValue -= 1;
    }

    if (cg_tpl.Attributes[arrayPlace].attributeValue < 10) {
        cg_tpl.attributesPoints += (Math.floor((((cg_tpl.Attributes[arrayPlace].attributeValue - 10) / 3) * 10) / 10)) * 10;
    }
    cg_tpl.points = cg_tpl.attributesPoints + cg_tpl.combatSkillPoints;
    loadPath("cg_tpl");
    refreshPoints("cg_tpl");
    $("#collapseOne" + arrayPlace).addClass("panel-collapse collapse in");
});


$("button[id^=attrPlusButton]").click(function () {
    var arrayPlace = this.id.match(/\d+/),
        _validatesmall = cg_tpl.Attributes[arrayPlace].attributeValue + 1;

    if (cg_tpl.Attributes[arrayPlace].attributeValue < 10) {
        cg_tpl.attributesPoints -= (Math.floor((((cg_tpl.Attributes[arrayPlace].attributeValue - 10) / 3) * 10) / 10)) * 10;
    }

    if (_validatesmall >= 20) {
        cg_tpl.Attributes[arrayPlace].attributeValue = 20;
    } else {
        cg_tpl.Attributes[arrayPlace].attributeValue += 1;
    }


    if (cg_tpl.Attributes[arrayPlace].attributeValue > 10) {
        cg_tpl.attributesPoints += (Math.ceil((((cg_tpl.Attributes[arrayPlace].attributeValue - 10) / 3) * 10) / 10)) * 10;
    }
     cg_tpl.points = cg_tpl.attributesPoints + cg_tpl.combatSkillPoints;
    loadPath("cg_tpl");
    refreshPoints("cg_tpl");
    $("#collapseOne" + arrayPlace).addClass("panel-collapse collapse in");
});

$("#newCombatSkill").toggle();

$("#addNewCombatSkillButton").click(function()
{
    $("#addNewCombatSkillButton").hide();
    $("#newCombatSkill").show();
});

$("#cancelNewCombatSkillButton").click(function()
{
    $("#newCombatSkill").hide();
    $("#addNewCombatSkillButton").show();

});

