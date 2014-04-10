var skillToEdit = "";

function refreshSkills () {
    
    for ( var x=0; x < ncg_tpl.skills.length ; x++) {

        $("#editSkill"+x).toggle();
        $("#skillNumber"+x).data("index",x);
        $("#saveSkill"+x).data("index",x);
        $("#cancelSkill"+x).data("index",x);

        $("#skillNumber"+x).click(function() {
            var index = $(this).data("index");
            skillToEdit = $("#hiddenSkillName"+index).val();
            $("#editSkill"+index).toggle();
            $("#skillNumber"+index).toggle();
        });

        $("#saveSkill"+x).click(function() {
            var index = $(this).data("index");
            //console.log("hidden skill value: "+skillToEdit);
            var editSkillName = $("#editSkillName"+index).val();
            var editSkillValue = $("#editSkillValue"+index).val();
            for (var i=0; i < ncg_tpl.skills.length ; i++) {
                if (ncg_tpl.skills[i].skillName == skillToEdit) {
                    ncg_tpl.skills[i].skillName = editSkillName;
                    ncg_tpl.skills[i].skillValue = editSkillValue;
                    brake;
                }
            }
            
            
            $("#skillNumber"+index).toggle();
            $("#editSkill"+index).toggle();
            loadPath("ncg_tpl");
        });

        $("#cancelSkill"+x).click(function () {
            var index = $(this).data("index");
            $("#skillNumber"+index).toggle();
            $("#editSkill"+index).toggle();
        });

    }
}

$("#newSkillButton").click(function() {
   ncg_tpl.skills.push(
       //TODO: Validate data.
       {skillName : $("#newSkillName").val(), skillValue : $("#newSkillValue").val()}
   );
    loadPath("ncg_tpl");
   
});





refreshSkills();


