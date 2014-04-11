var skillToEdit = "";
var recentSkillForm = "";
var recentSkillNumber = "";
function refreshSkills ()
{
    for ( var x=0; x < ncg_tpl.skills.length ; x++)
    {
        $("#editSkill"+x).toggle();
        $("#skillNumber"+x).data("index",x);
        $("#saveSkillButton"+x).data("index",x);
        $("#cancelSkillButton"+x).data("index",x);
        $("#deleteSkillButton"+x).data("index",x);

        $("#skillNumber"+x).click(function()
        {

            if (recentSkillForm != "") $(recentSkillForm).hide();
            if (recentSkillNumber != "") $(recentSkillNumber).show();
            var index = $(this).data("index");

            skillToEdit = $("#hiddenSkillName"+index).val();
            $("#editSkill"+index).toggle();
            $("#skillNumber"+index).hide();
            recentSkillForm = "#editSkill"+index;
            recentSkillNumber = "#skillNumber"+index;
        });

        $("#cancelSkillButton"+x).click(function ()
        {
            var index = $(this).data("index");
            $("#skillNumber"+index).show();
            $("#editSkill"+index).toggle();

        });

        $("#saveSkillButton"+x).click(function()
        {

            var index = $(this).data("index");
            var editSkillName = $("#editSkillName"+index).val();
            var editSkillValue = $("#editSkillValue"+index).val();

            for (var i=0; i < ncg_tpl.skills.length ; i++)
            {
                var _found = false;
                for (var j=0; j < ncg_tpl.skills.length ; j++)
                {
                    if ($("#editSkillName"+index).val().toLowerCase() == ncg_tpl.skills[j].skillName.toLowerCase())
                    {
                        _found = true;
                        break;
                    }
                }

                if (ncg_tpl.skills[i].skillName == skillToEdit && !_found)
                {
                    ncg_tpl.skills[i].skillName = editSkillName;
                    ncg_tpl.skills[i].skillValue = editSkillValue;

                    break;

                }
                else if (ncg_tpl.skills[i].skillName == skillToEdit)
                {
                    ncg_tpl.skills[i].skillValue = editSkillValue;
                }
            }

            $("#skillNumber"+index).show();
            $("#editSkill"+index).toggle();

            loadPath("ncg_tpl");
        });

        $("#deleteSkillButton"+x).click(function()
        {
            var index = $(this).data("index");

            for (var i=0; i < ncg_tpl.skills.length ; i++)
            {
                if (i == index)
                {
                    ncg_tpl.skills.splice(i,1);
                    break;
                }
            }

            $("#skillNumber"+index).toggle();
            $("#editSkill"+index).toggle();
            loadPath("ncg_tpl");
        });

    }
}

$("#newSkillButton").click(function()
{
    var _found = false;
    for (var i = 0; i < ncg_tpl.skills.length; i++)
    {

        if ($("#newSkillName").val().toLowerCase() == ncg_tpl.skills[i].skillName.toLowerCase()) _found = true;
    }

    if (!_found)
    {
        ncg_tpl.skills.push({skillName : $("#newSkillName").val(), skillValue : $("#newSkillValue").val()});
        loadPath("ncg_tpl");
    }
    else
    {
        $("#newSkill").append("a");
    }
});

refreshSkills();
