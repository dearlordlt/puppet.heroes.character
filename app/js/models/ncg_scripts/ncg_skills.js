var ncg_skillToEdit = "";
var ncg_recentSkillForm = "";
var ncg_recentSkillNumber = "";
var ncgSkillPointsSpent = 0;
function validateSkillData (_skillName,_skillValue)
{
    if (_skillName.length < 2) return false;
    if (!isNumber(_skillValue)) return false;
    if (_skillValue < 1) return false;
    return true;
}

function refreshSkills ()
{
    for ( var x=0; x < ncg_tpl.skills.length ; x++)
    {
        ncgSkillPointsSpent += Number($("#editSkillValue"+x).val());
        $("#editSkill"+x).toggle();
        $("#skillNumber"+x).data("_index",x);
        $("#saveSkillButton"+x).data("_index",x);
        $("#cancelSkillButton"+x).data("_index",x);
        $("#deleteSkillButton"+x).data("_index",x);

        $("#skillNumber"+x).click(function()
        {
            var _index = $(this).data("_index");
            if (ncg_recentSkillForm != "") $(ncg_recentSkillForm).hide();
            if (ncg_recentSkillNumber != "") $(ncg_recentSkillNumber).show();
            ncg_skillToEdit = $("#hiddenSkillName"+_index).val();
            $("#editSkill"+_index).toggle();
            $("#skillNumber"+_index).hide();
            ncg_recentSkillForm = "#editSkill"+_index;
            ncg_recentSkillNumber = "#skillNumber"+_index;
        });

        $("#cancelSkillButton"+x).click(function ()
        {
            var _index = $(this).data("_index");
            $("#skillNumber"+_index).show();
            $("#editSkill"+_index).toggle();
        });

        $("#saveSkillButton"+x).click(function()
        {
            var _index = $(this).data("_index");
            var _editSkillName = $("#editSkillName"+_index).val();
            var _editSkillValue = $("#editSkillValue"+_index).val();
            if (!validateSkillData(_editSkillName,_editSkillValue))
            {
                //TODO: notify user
                console.log("cannot edit skill");
                $("#editSkill"+_index).each(function ()
                {
                    var _originalAttr = $(this).attr("class");
                    $(this).attr('class', "has-error " + _originalAttr);
                });
                return;
            }

            for (var i=0; i < ncg_tpl.skills.length ; i++)
            {
                var _found = false;
                for (var j=0; j < ncg_tpl.skills.length ; j++)
                {
                    if ($("#editSkillName"+_index).val().toLowerCase() == ncg_tpl.skills[j].skillName.toLowerCase())
                    {
                        _found = true;
                        break;
                    }
                }

                if (ncg_tpl.skills[i].skillName == ncg_skillToEdit && !_found)
                {
                    ncg_tpl.skills[i].skillName = _editSkillName;
                    ncg_tpl.skills[i].skillValue = _editSkillValue;
                    break;
                }
                else if (ncg_tpl.skills[i].skillName == ncg_skillToEdit)
                {
                    ncg_tpl.skills[i].skillValue = _editSkillValue;
                }
            }
            $("#skillNumber"+_index).show();
            $("#editSkill"+_index).toggle();
            loadPath("ncg_tpl");
        });

        $("#deleteSkillButton"+x).click(function()
        {
            var _index = $(this).data("_index");
            for (var i=0; i < ncg_tpl.skills.length ; i++)
            {
                if (i == _index)
                {
                    ncg_tpl.skills.splice(i,1);
                    break;
                }
            }
            $("#skillNumber"+_index).toggle();
            $("#editSkill"+_index).toggle();
            loadPath("ncg_tpl");
        });
    }
    ncg_tpl.points = ncgSkillPointsSpent;
}

$("#newSkill").toggle();

$("#addNewSkillButton").click(function()
{
    $("#addNewSkillButton").hide();
    $("#newSkill").show();
});

$("#cancelNewSkillButton").click(function()
{
    $("#newSkill").hide();
    $("#addNewSkillButton").show();
});

$("#newSkillButton").click(function()
{
    var _found = false;
    var _newSkillName = $("#newSkillName").val();
    var _newSkillValue = $("#newSkillValue").val();

    if (!validateSkillData(_newSkillName,_newSkillValue))
    {
        //TODO: notify user
        console.log("cannot create skill");
        $("#newSkill").each(function ()
        {
            var originalAttr = $(this).attr("class");
            $(this).attr('class', "has-error " + originalAttr);
        });
        return;
    }

    for (var i = 0; i < ncg_tpl.skills.length; i++)
    {
        if (_newSkillName.toLowerCase() == ncg_tpl.skills[i].skillName.toLowerCase())
        {
            _found = true;
            break;
        }
    }

    if (!_found)
    {
        ncg_tpl.skills.push({skillName : _newSkillName, skillValue : _newSkillValue});
        loadPath("ncg_tpl");
        $("#newSkill").hide();
        $("#addNewSkillButton").show();
    }
});
refreshSkills();
