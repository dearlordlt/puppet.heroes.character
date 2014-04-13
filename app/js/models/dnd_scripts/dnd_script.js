var gridster;

$(function() {
    gridster = $(".gridster").gridster({
        widget_base_dimensions: [
            300,
            100],
        widget_margins: [5, 5],
        helper: 'clone',
        resize: {
            enabled: true,
            max_size: [2, 2],
            min_size: [1, 1]
        }
    }).data('gridster');
});
