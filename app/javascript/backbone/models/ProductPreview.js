(function (dw, Backbone, $, _, dust) {

  dw.ProductPreview = Backbone.Model.extend({
    sync: dw.config.sync
  });

}(window.app.dw, Backbone, jQuery, _, dust));
