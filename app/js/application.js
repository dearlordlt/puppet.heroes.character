Handlebars.getTemplate = function(name) {
	if (Handlebars.templates === undefined || Handlebars.templates[name] === undefined) {
		$.ajax({
			url      : './app/templates/' + name + '.hbs',
			success  : function(data) {
                if (Handlebars.templates === undefined) {
					Handlebars.templates = {};
				}
				Handlebars.templates[name] = Handlebars.compile(data);
			},
			async   : false
		});
	}
	return Handlebars.templates[name];
};

$( window ).on('hashchange', function(e) {
    var hash = window.location.hash;
    var path = hash.slice(1, hash.length);
    if(path != "" && path != "undefined") {
        var compiledTemplate = Handlebars.getTemplate(path);
        if(path == "home_tpl") {
            var html = compiledTemplate( home_tpl );
            $("#body-template").html( html );
            console.log("Loading: " + path);
        }
        if(path == "cg_tpl") {
            var html = compiledTemplate( cg_tpl );
            $("#body-template").html( html );
            console.log("Loading: " + path);
        }
        if(path == "ncg_tpl") {
            var html = compiledTemplate( ncg_tpl );
            $("#body-template").html( html );
            console.log("Loading: " + path);
        }
        if(path == "map_tpl") {
            var html = compiledTemplate( map_tpl );
            $("#body-template").html( html );
            console.log("Loading: " + path);
        }
    }
});

$( document ).ready(function() {
    var compiledTemplate = Handlebars.getTemplate("header_tpl");
    var html = compiledTemplate( header_tpl );
    $("#header-template").html( html );
    
    var compiledTemplate = Handlebars.getTemplate("home_tpl");
    var html = compiledTemplate( home_tpl );
    $("#body-template").html( html );
    
    var compiledTemplate = Handlebars.getTemplate("footer_tpl");
    var html = compiledTemplate( footer_tpl );
    $("#footer-template").html( html );
});