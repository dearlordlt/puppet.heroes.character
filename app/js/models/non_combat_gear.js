var module_ncg_tpl = function (title, character, talents, skills, possessions, goals, knowledges, pockets)
{
    this.title = title;
    this.character = character;
    this.talents = talents;
    this.skills = skills;
    this.possessions = possessions;
    this.goals = goals;
    this.knowledges = knowledges;
    this.pockets = pockets;
}

var ncg_tpl = new module_ncg_tpl (
    "Non combat gear",
    { Name : "Sketas", Gender : "Male", Age : 31, "Free Points" : 0},
    { Performer : 1, Operator : 1, Laborer : 1, Craftsman : 1, Analytic : 0, Architect : 0, Leader : 0, Artist : 0},
    [
        {skillName : "Riding", skillValue : 1, 
            skillSpecialization :
            [
                "Camel",
                "Elephant",
                "Horse"
            ]
        }, 
        {skillName : "Stoneworker", skillValue : 5},
        {skillName : "Climbing", skillValue : 2},
        {skillName : "Sewing", skillValue : 1},
        {skillName : "Farting", skillValue : 5},
        {skillName : "Observe", skillValue : 3}
    ],
    ["Castle","1500 Peasants","10Ha Land","House on the hill"],
    ["Get more castles","Sell 1337 Peasants","Get more land","Build palace on that hill of mine"],
    ["I know how to get those castles","H4ck3r need some peasants","H4ck3r would trade peasants to 100Ha land","I have the highest hill in the area"],
    ["100 Pieces of gold coins", "2 dried lizards", "5 Keys", "Hair of dryad"]


)
