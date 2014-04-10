var model_cg_tpl = function(title, Attributes) {
    this.title = title;
    this.Attributes = Attributes;
}

var cg_tpl = new model_cg_tpl(
    "Combat Gear",
    [
        [{attributeName : "Strength"},  {attributeValue : 10}],
        [{attributeName : "Stamina"},   {attributeValue : 12}],
        [{attributeName : "Dexterity"}, {attributeValue : 13}],
        [{attributeName : "Reflex"},    {attributeValue : 14}],
        [{attributeName : "Perseption"},{attributeValue : 15}],
        [{attributeName : "Will"},      {attributeValue : 10}]
    ]
);
