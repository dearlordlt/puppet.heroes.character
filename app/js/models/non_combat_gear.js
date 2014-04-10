var module_ncg_tpl = function (title, character, skills) {
    this.title = title;
    this.character = character;
    this.skills = skills;
}

var ncg_tpl = new module_ncg_tpl (
    "Non combat gear",
    { Name : "Sketas", Gender : "Male", Age : 31, "Free Points" : 0},
    [
        {skillName : "Riding", skillValue : 1, 
            skillSpecialization : [
                "camel","elephant"
            ]
        }, 
    {skillName : "Stoneworker", skillValue : 4}
    ]
)