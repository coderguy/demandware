(function(dw, Backbone, $, _) {

  dw.models.ProductPreview = Backbone.Model.extend({
    sync: dw.config.sync
  });

}(window.app.dw, Backbone, jQuery, _));
