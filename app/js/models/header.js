var model_header_tpl = function (title, logo) {
    this.title = title;
    this.logo = logo;
}

var header_tpl = new model_header_tpl (
    'Puppet Heroes',
    "./app/img/puppet-hero-black.png"
);
