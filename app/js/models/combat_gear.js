var model_cg_tpl = function(title, points, attributesPoints, combatSkillPoints, Attributes, minAttribute, maxAttribute, combatSkills, vigorSelect, vigorUsed, vigorFatigue) {
    this.title = title;
    this.attributesPoints = attributesPoints;
    this.combatSkillPoints = combatSkillPoints;
    this.Attributes = Attributes;
    this.points = points;
    this.minAttribute = minAttribute;
    this.maxAttribute = maxAttribute;
    this.combatSkills = combatSkills;
    this.vigorSelect = vigorSelect;
    this.vigorUsed = vigorUsed;
    this.vigorFatigue = vigorFatigue;
}

var cg_tpl = new model_cg_tpl(
    "Combat Gear", //title
    0,  //attributePoints
    0,  //combatSkillPoints
    0,  //totalSkill Points
    [
        {attributeName : "Strength",   attributeValue : 10 , attriPointValue: 220},  // Base attributes nonchangible
        {attributeName : "Stamina",    attributeValue : 10 , attriPointValue: 50},
        {attributeName : "Dexterity",  attributeValue : 10 , attriPointValue: 20},
        {attributeName : "Reflex",     attributeValue : 10 , attriPointValue: 10},
        {attributeName : "Perseption", attributeValue : 10 , attriPointValue: 50},
        {attributeName : "Will",       attributeValue : 10 , attriPointValue: 70}
    ],
    7,      //Minimum Attribute value
    20,     //Maximum Attribute value
            //Skills array
    [
        {combatSkillname: "Athletics",      combatSkillValue: 0 , combatSkillPointsValue : 0},
        {combatSkillname: "Evade",          combatSkillValue: 0 , combatSkillPointsValue : 0},
        {combatSkillname: "Close Quarters", combatSkillValue: 0 , combatSkillPointsValue : 0},
    ],
    15,    //Vigor pool
    0,      //Used Vigor
    0       //Vigor Fatigue
);

function new_cg_tpl() {
    cg_tpl = new model_cg_tpl(
     "Combat Gear", //title
    0,  //attributePoints
    0,  //combatSkillPoints
    0,  //totalSkillPoints
    [
        {attributeName : "Strength",   attributeValue : 10 , attriPointValue: 0},  // Base attributes nonchangible
        {attributeName : "Stamina",    attributeValue : 10 , attriPointValue: 0},
        {attributeName : "Dexterity",  attributeValue : 10 , attriPointValue: 0},
        {attributeName : "Reflex",     attributeValue : 10 , attriPointValue: 0},
        {attributeName : "Perseption", attributeValue : 10 , attriPointValue: 0},
        {attributeName : "Will",       attributeValue : 10 , attriPointValue: 0}
    ],
    7,      //Minimum Attribute value
    20,     //Maximum Attribute value
            //Skills array
    [
        {combatSkillname: "Athletics",      combatSkillValue: 0 , combatSkillPointsValue : 0},
        {combatSkillname: "Evade",          combatSkillValue: 0 , combatSkillPointsValue : 0},
        {combatSkillname: "Close Quarters", combatSkillValue: 0 , combatSkillPointsValue : 0},
    ],
    20,    //Vigor pool
    15,      //Used Vigor
    5       //Vigor Fatigue

    );

};
