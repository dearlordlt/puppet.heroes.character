var COLOR_ENABLED = "#ffffff";
var COLOR_DISABLED = "#3276b1";
var COLOR_TAKEN = "#5cb85c";
var isOppositeDisabled = false;
var disabledTalentColumns = [];

function initTalents()
{
    //TODO: redraw talen circle.
}
initTalents();

function isColumnDisabled(_column)
{
    for (var i=0; i < disabledTalentColumns.length; i++)
    {
        if (parseInt(disabledTalentColumns[i]) == parseInt(_column)) return true;
    }
    return false;
}

$(".ncgTalentBtn").click(function()
{
    var _clickedStatus = $(this).data("status");
    if (_clickedStatus == "disabled") return;

    var _clickedRow = parseInt($(this).data("row"));
    var _clickedCol = parseInt($(this).data("column"));
    var _status = $(this).data("status");
    var _children = ($(this).data("children")).split(";");
    var _siblings = "";
    if ($(this).data("siblings") != undefined) _siblings = ($(this).data("siblings")).split(";");

    $(this).data("status","disabled");
    $(".ncgTalentPolygon").each(function(index)
    {
        var _polygonPosition = $(this).data("row")+","+$(this).data("column");
        for (var i=0; i < _children.length; i++)
        {
            if (_polygonPosition == _children[i])
            {
                $(this).data("status","taken");
                ncg_tpl.talents[$(this).data("name")] = $(this).data("row");
                $("#talent-"+$(this).data("name")).text($(this).data("row"));
            }
        }
    });

    if (_clickedRow == 1)
    {
        var _oppositeBtn = parseInt($(this).data("column"))+4;
        if (_oppositeBtn > 8) _oppositeBtn -= 8;

        if (isOppositeDisabled)
        {
            $(".ncgTalentBtn").each(function(index)
            {
               if ($(this).data("row") == "2" && !isColumnDisabled($(this).data("column"))) $(this).data("status","enabled");
            });
        }
        $(".ncgTalentBtn").each(function(index)
        {
            //Disabling opposite button
            var _thisColumn = parseInt($(this).data("column"));
            if (_thisColumn != _oppositeBtn && _thisColumn != _clickedCol)
            {
                if (parseInt($(this).data("row")) == _clickedRow)
                {
                    $(this).data("status","disabled");
                }
            }

            // enabling siblings
            var _siblingsPolygonPosition = $(this).data("row")+","+$(this).data("column");
            for (var i=0; i < _siblings.length; i++)
            {
                if (_siblingsPolygonPosition == _siblings[i])
                {
                    $(this).data("status","enabled");
                }
            }
            isOppositeDisabled = true;
        });
    }

    if(_clickedRow == 2) //TODO: disable level 2 buttons on positions +3 and -3, when first level 2 talent picked.
    {
        var _thisColumn = parseInt($(this).data("column"));
        $(".ncgTalentBtn").each(function(index)
        {
            var _disableLeft = _thisColumn - 1;
            var _disableRight = _thisColumn + 1;
            if (_disableLeft < 1) _disableLeft = 8;
            if (_disableRight > 8) _disableRight = 1;


            if (parseInt($(this).data("column")) == _disableLeft || parseInt($(this).data("column")) == _disableRight)
            {
                if ($(this).data("row") == "2")
                {
                    disabledTalentColumns.push($(this).data("column"));
                    $(this).data("status","disabled");
                }
            }
        });
        disabledTalentColumns.push($(this).data("column"));
        $(".ncgTalentBtn").each(function(index)
        {
            var _siblingsPolygonPosition = $(this).data("row")+","+$(this).data("column");
            for (var i=0; i < _siblings.length; i++)
            {
                if (_siblingsPolygonPosition == _siblings[i])
                {
                    $(this).data("status","enabled");
                }
            }
        });
    }
    checkTalentStatus();
});

function checkTalentStatus ()
{
    $(".ncgTalentPolygon").each(function(index)
    {
      //  console.log(index+" :indexas"+$(this).data("status"));
        if ($(this).data("status") == "enabled") $(this).attr("fill",COLOR_ENABLED);
        if ($(this).data("status") == "disabled") $(this).attr("fill",COLOR_DISABLED);
        if ($(this).data("status") == "taken") $(this).attr("fill",COLOR_TAKEN);
    });
    $(".ncgTalentBtn").each(function(index)
    {
      //  console.log(index+" :indexas"+$(this).data("status"));
        if ($(this).data("status") == "enabled") $(this).attr("fill",COLOR_ENABLED);
        if ($(this).data("status") == "disabled") $(this).attr("fill",COLOR_DISABLED);
        if ($(this).data("status") == "taken") $(this).attr("fill",COLOR_TAKEN);
    });
}

checkTalentStatus();
