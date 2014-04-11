var model_cg_tpl = function(title, points, Attributes) {
    this.title = title;
    this.Attributes = Attributes;
    this.points = points;
}

var cg_tpl = new model_cg_tpl(
    "Combat Gear",
    0,
    [
        {attributeName : "Strength",   attributeValue : 10},
        {attributeName : "Stamina",    attributeValue : 12},
        {attributeName : "Dexterity",  attributeValue : 13},
        {attributeName : "Reflex",     attributeValue : 14},
        {attributeName : "Perseption", attributeValue : 15},
        {attributeName : "Will",       attributeValue : 10}
    ]
);
