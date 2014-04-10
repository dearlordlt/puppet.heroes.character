var model_cg_tpl = function(title, Attributes) {
    this.title = title;
    this.Attributes = Attributes;
}

var cg_tpl = new model_cg_tpl(
    "Combat Gear",
    [
        [{attributeName : "Strength"},  {str : 10}],
        [{attributeName : "Stamina"},   {sta : 10}],
        [{attributeName : "Dexterity"}, {dex : 10}],
        [{attributeName : "Reflex"},    {ref : 10}],
        [{attributeName : "Perseption"},{per : 10}],
        [{attributeName : "Will"},      {wil : 10}]
    ]
);
