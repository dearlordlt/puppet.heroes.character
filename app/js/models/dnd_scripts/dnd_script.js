var gridster;

$(function() {
    gridster = $(".gridster ul").gridster({
        widget_base_dimensions: [
            parseInt($(".gridster").width())/2,
            100],
        widget_margins: [5, 5],
        helper: 'clone',
        resize: {
            enabled: false,
            max_size: [2, 2],
            min_size: [1, 1]
        }
    }).data('gridster');
});
