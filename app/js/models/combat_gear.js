var model_cg_tpl = function(title, points, attributesPoints, combatSkillPoints, Attributes, minAttribute, maxAttribute, combatSkills) {
    this.title = title;
    this.attributesPoints = attributesPoints;
    this.combatSkillPoints = combatSkillPoints;
    this.Attributes = Attributes;
    this.points = points;
    this.minAttribute = minAttribute;
    this.maxAttribute = maxAttribute;
    this.combatSkills = combatSkills;
}

var cg_tpl = new model_cg_tpl(
    "Combat Gear",
    0,
    0,
    0,
    [
        {attributeName : "Strength",   attributeValue : 10},
        {attributeName : "Stamina",    attributeValue : 10},
        {attributeName : "Dexterity",  attributeValue : 10},
        {attributeName : "Reflex",     attributeValue : 10},
        {attributeName : "Perseption", attributeValue : 10},
        {attributeName : "Will",       attributeValue : 10}
    ],
    7,
    20,
    [
        {combatSkillname: "Athletics",      combatSkillValue: 1},
        {combatSkillname: "Evade",          combatSkillValue: 1},
        {combatSkillname: "Close Quarters", combatSkillValue: 1}
    ]
);
