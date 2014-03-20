if (Handlebars == undefined) {
  Handlebars = Package.ui.Handlebars;
};

Handlebars.registerHelper('markdown', function (options) {
  return marked(options.fn(this));
});
